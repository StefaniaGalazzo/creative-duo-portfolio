import { useTheme } from '../../../theme/ThemeProvider'
import { Text } from '../../elements'
import { TxtSectionWrapper } from './styles'
import styled from 'styled-components'

export const Description = styled.p`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.4;
  font-size: 1.2rem;
  .char {
    display: inline-block;
    min-width: 4px;
    will-change: transform;
    pointer-events: none;
  }
`

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function TextSection({
  title = 'Lorem Ipsum',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec dui blandit, aliquet sapien sed, posuere libero. Mauris lorem ligula, cursus in ligula vitae, iaculis faucibus metus. Mauris ut lorem venenatis, egestas odio vel, dictum purus. Morbi felis ipsum, ultricies et nisi sit amet, venenatis facilisis ipsum. Mauris non justo mattis, feugiat justo in, aliquet mi. Sed vitae dignissim magna. Praesent blandit maximus lobortis',
}) {
  const { theme } = useTheme()
  const descRef = useRef<HTMLParagraphElement>(null)

  const mouseX = useRef<number | null>(null)
  const isHovering = useRef(false)

  useEffect(() => {
    if (!descRef.current) return

    const chars = Array.from(descRef.current.querySelectorAll<HTMLSpanElement>('.char'))
    let time = 0

    const amplitude = 8
    const speed = 0.045
    const radius = 80
    const phaseOffset = 0.25 // distanza di fase tra lettere

    const tick = () => {
      time += speed

      chars.forEach((char, i) => {
        if (!isHovering.current || mouseX.current === null) {
          gsap.to(char, {
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          })
          return
        }

        const rect = char.getBoundingClientRect()
        const charCenter = rect.left + rect.width / 2
        const distance = Math.abs(mouseX.current - charCenter)

        if (distance > radius) {
          gsap.to(char, {
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          })
          return
        }

        // attenuazione continua
        const falloff = Math.exp(-Math.pow(distance / radius, 2))

        // onda che viaggia
        const wave = Math.sin(time - i * phaseOffset) * amplitude * falloff

        gsap.to(char, {
          y: wave,
          duration: 0.18,
          ease: 'sine.out',
        })
      })
    }

    gsap.ticker.add(tick)

    return () => {
      gsap.ticker.remove(tick)
    }
  }, [])

  return (
    <TxtSectionWrapper>
      <Text as='h1' $fontSize='3rem' $fontFamily={theme?.tokens?.fonts?.headerBold} className='hoverable'>
        {title}
      </Text>

      <Description
        ref={descRef}
        onMouseMove={(e) => {
          mouseX.current = e.clientX
        }}
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => {
          isHovering.current = false
          mouseX.current = null
        }}>
        {description.split('').map((char, i) => (
          <span key={i} className='char'>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </Description>
    </TxtSectionWrapper>
  )
}
