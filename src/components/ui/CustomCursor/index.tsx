import { useEffect, useRef, useState } from 'react'
import { CursorBallBig, CursorBallSmall, CursorInner, CursorWrapper } from './styles'

type CustomCursorProps = {
  children: React.ReactNode
}

export default function CustomCursor({ children }: CustomCursorProps) {
  const bigBallRef = useRef<HTMLDivElement>(null)
  const smallBallRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const mousePos = useRef({ x: 0, y: 0 })
  const bigBallPos = useRef({ x: 0, y: 0 })
  const smallBallPos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)

      // Debug: controlla elemento sotto il mouse
      const target = e.target as HTMLElement
      const hasHoverable = target.closest('.hoverable')
      const isInteractive = target.closest('a, button, [role="button"]')
      
      // Aggiorna stato hover in real-time
      setIsHovered(!!(hasHoverable || isInteractive))
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => {
      setIsVisible(false)
      setIsHovered(false)
    }

    const animate = () => {
      // Smooth follow per big ball (più lento, più smooth)
      bigBallPos.current.x += (mousePos.current.x - bigBallPos.current.x) * 0.15
      bigBallPos.current.y += (mousePos.current.y - bigBallPos.current.y) * 0.15

      // Smooth follow per small ball (più veloce e reattivo)
      smallBallPos.current.x += (mousePos.current.x - smallBallPos.current.x) * 0.4
      smallBallPos.current.y += (mousePos.current.y - smallBallPos.current.y) * 0.4

      if (bigBallRef.current) {
        bigBallRef.current.style.transform = `translate(${bigBallPos.current.x - 15}px, ${
          bigBallPos.current.y - 15
        }px)`
      }
      if (smallBallRef.current) {
        smallBallRef.current.style.transform = `translate(${smallBallPos.current.x - 5}px, ${
          smallBallPos.current.y - 5
        }px)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [isVisible])

  // Debug: log quando isHovered cambia
  useEffect(() => {
    console.log('Cursor isHovered:', isHovered)
  }, [isHovered])

  return (
    <CursorWrapper>
      {isVisible && (
        <>
          <CursorBallBig ref={bigBallRef} $isHovered={isHovered}>
            <CursorInner $isHovered={isHovered} />
          </CursorBallBig>

          <CursorBallSmall ref={smallBallRef}>
            <CursorInner />
          </CursorBallSmall>
        </>
      )}

      {children}
    </CursorWrapper>
  )
}
