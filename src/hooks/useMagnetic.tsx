import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export function useMagnetic(ref: React.RefObject<HTMLElement>, strength = 0.08, maxOffset = 40) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 100, damping: 10 })
  const springY = useSpring(y, { stiffness: 100, damping: 10 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      const vx = e.clientX - cx
      const vy = e.clientY - cy

      const distance = Math.sqrt(vx * vx + vy * vy) || 1

      const nx = vx / distance
      const ny = vy / distance

      const force = Math.min(distance * strength, maxOffset)

      x.set(nx * force)
      y.set(ny * force)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [ref, strength, maxOffset, x, y])

  return { x: springX, y: springY }
}
