// src/components/AnimatedBackground.tsx
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
`

const Gradients = styled.div`
  width: 100%;
  height: 100%;
  filter: url(#goo) blur(40px);
`

const BubbleBase = styled.div`
  position: absolute;
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  mix-blend-mode: var(--blending);
`

const G1 = styled(BubbleBase)`
  background: radial-gradient(circle, rgba(var(--color1), 0.8) 0%, rgba(var(--color1), 0) 50%);
  animation: moveVertical 30s ease infinite;
`

const G2 = styled(BubbleBase)`
  background: radial-gradient(circle, rgba(var(--color2), 0.8) 0%, rgba(var(--color2), 0) 50%);
  transform-origin: calc(50% - 400px);
  animation: moveInCircle 20s reverse infinite;
`

const G3 = styled(BubbleBase)`
  background: radial-gradient(circle, rgba(var(--color3), 0.8) 0%, rgba(var(--color3), 0) 50%);
  top: calc(50% + 200px);
  left: calc(50% - 500px);
  transform-origin: calc(50% + 400px);
  animation: moveInCircle 40s linear infinite;
`

const G4 = styled(BubbleBase)`
  background: radial-gradient(circle, rgba(var(--color4), 0.8) 0%, rgba(var(--color4), 0) 50%);
  transform-origin: calc(50% - 200px);
  animation: moveHorizontal 40s ease infinite;
  opacity: 0.7;
`

const G5 = styled(BubbleBase)`
  background: radial-gradient(circle, rgba(var(--color5), 0.8) 0%, rgba(var(--color5), 0) 50%);
  width: calc(var(--circle-size) * 2);
  height: calc(var(--circle-size) * 2);
  top: calc(50% - var(--circle-size));
  left: calc(50% - var(--circle-size));
  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: moveInCircle 20s ease infinite;
`

const Interactive = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
  background: radial-gradient(circle, rgba(var(--color-interactive), 0.8) 0%, rgba(var(--color-interactive), 0) 50%);
  mix-blend-mode: var(--blending);
  opacity: 0.7;
  will-change: transform;
`

export const AnimatedBackground = () => {
  const interactiveRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let curX = 0
    let curY = 0
    let tgX = 0
    let tgY = 0
    let rafId: number

    const move = () => {
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      }

      rafId = requestAnimationFrame(move)
    }

    const onMouseMove = (e: MouseEvent) => {
      tgX = e.clientX
      tgY = e.clientY
    }

    window.addEventListener('mousemove', onMouseMove)
    move()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <Wrapper>
      <svg width='0' height='0'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>

      <Gradients>
        <G1 />
        <G2 />
        <G3 />
        <G4 />
        <G5 />
        <Interactive ref={interactiveRef} />
      </Gradients>
    </Wrapper>
  )
}
