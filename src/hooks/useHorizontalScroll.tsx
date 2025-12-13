import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'

type UseHorizontalScrollOptions = {
  speed?: number
  smoothness?: number
  damping?: number
}

export function useHorizontalScroll(options: UseHorizontalScrollOptions = {}) {
  const { speed = 1, smoothness = 100, damping = 30 } = options
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const scrollX = useMotionValue(0)

  // Ottieni scroll progress della pagina
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Calcola la distanza totale da scrollare
  const getScrollDistance = () => {
    if (!scrollRef.current) return 0
    const scrollWidth = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    return -(scrollWidth - clientWidth)
  }

  // Trasforma scroll Y in movimento X
  const x = useTransform(scrollYProgress, [0, 1], [0, getScrollDistance() * speed])

  // Applica smoothness con spring
  const smoothX = useSpring(scrollX, {
    stiffness: smoothness,
    damping: damping,
    mass: 1,
  })

  // Gestione wheel event per lo scroll orizzontale quando hover
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (!isHovered) return

      const scrollDistance = getScrollDistance()
      const currentX = scrollX.get()
      const newX = currentX - e.deltaY * 2 // Moltiplica per velocità

      // Blocca lo scroll verticale solo se non siamo ai limiti
      const isAtStart = newX >= 0
      const isAtEnd = newX <= scrollDistance

      if (!isAtStart && !isAtEnd) {
        e.preventDefault()
        scrollX.set(Math.max(scrollDistance, Math.min(0, newX)))
      } else if (isAtStart && e.deltaY < 0) {
        // Siamo all'inizio e si scrolla verso l'alto
        e.preventDefault()
        scrollX.set(0)
      } else if (isAtEnd && e.deltaY > 0) {
        // Siamo alla fine e si scrolla verso il basso
        e.preventDefault()
        scrollX.set(scrollDistance)
      }
      // Altrimenti lascia passare l'evento per lo scroll verticale della pagina
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [isHovered, scrollX])

  // Sincronizza con lo scroll della pagina quando non è hover
  useEffect(() => {
    if (!isHovered) {
      const unsubscribe = x.on('change', (latest) => {
        scrollX.set(latest)
      })
      return unsubscribe
    }
  }, [isHovered, x, scrollX])

  // Aggiorna la distanza quando il contenuto cambia
  useEffect(() => {
    const updateDistance = () => {
      const distance = getScrollDistance()
      if (!isHovered) {
        scrollX.set(scrollYProgress.get() * distance * speed)
      }
    }

    const resizeObserver = new ResizeObserver(updateDistance)
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [speed, scrollYProgress, scrollX, isHovered])

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return {
    containerRef,
    scrollRef,
    x: smoothX,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  }
}
