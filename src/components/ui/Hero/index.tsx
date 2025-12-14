import { motion } from 'framer-motion'
import { HeroWrapper } from './styles'
import { Flex, MagneticBadge, Text } from '../../elements'
import { useTheme } from '../../../theme/ThemeProvider'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedNameProps {
  firstLine: string
  secondLine: string
  gradient?: string
  fontFamily?: string
}

export function AnimatedName({ firstLine, secondLine, gradient, fontFamily }: AnimatedNameProps) {
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!firstRef.current || !secondRef.current) return

    const letters1 = firstRef.current.querySelectorAll<HTMLSpanElement>('.letter')
    const letters2 = secondRef.current.querySelectorAll<HTMLSpanElement>('.letter')

    // Animiamo solo opacity e rimuoviamo completamente il transform alla fine
    gsap.fromTo(
      letters1,
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform', // Rimuove completamente la proprietà transform alla fine
      }
    )

    gsap.fromTo(
      letters2,
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        clearProps: 'transform', // Rimuove completamente la proprietà transform alla fine
      }
    )
  }, [])

  const renderLetters = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className='letter' style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))

  return (
    <Text
      as='h3'
      className='name hoverable'
      $align='right'
      $alignSelf='end'
      $display='flex'
      $direction='column'
      $gradient={gradient}
      $gradientClip={true}
      $fontFamily={fontFamily}>
      <span ref={firstRef}>{renderLetters(firstLine)}</span>
      <span ref={secondRef}>{renderLetters(secondLine)}</span>
    </Text>
  )
}

export default function Hero() {
  const { theme } = useTheme()

  const h3Gradient =
    theme.mode === 'light'
      ? `linear-gradient(135deg, ${theme.colors.accent1}, ${theme.colors.detail3})`
      : `linear-gradient(135deg, ${theme.colors.accent1}, ${theme.colors.detail2}, ${theme.colors.detail3})`

  const h3Gradient2 =
    theme.mode === 'light'
      ? `linear-gradient(135deg, ${theme.colors.detail3}, ${theme.colors.accent2})`
      : `linear-gradient(135deg, ${theme.colors.detail3}, ${theme.colors.detail2}, ${theme.colors.accent1})`

  return (
    <HeroWrapper id='hero-wrapper' $position='relative' $height='calc(100vh - 50px)'>
      <Text
        as='h3'
        children={'—— Based in Turin ——'}
        $position='absolute'
        $top='2rem'
        $right='2rem'
        $align='right'
        $w={'80px'}
        $fontFamily={theme?.tokens?.fonts?.paragraph}
        $fontWeight={'normal'}
      />
      <motion.a
        className='hoverable'
        href='/isabella'
        initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d', position: 'absolute', top: '5%', left: '5%' }}>
        <MagneticBadge
          variant='punchy'
          label={
            <Text as='p' $display='flex' $gap='8px'>
              <Text as='span' $alignItems='end' $display='flex' $direction='column'>
                <span>Punchy </span>
                <span>Copiwriter</span>
              </Text>
              <span>—— </span>
            </Text>
          }
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0.8, rotateZ: 10 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d', position: 'absolute', bottom: '5%', right: '5%' }}
        href='/stefania'>
        <MagneticBadge
          variant='fluid'
          label={
            <Text as='p' $display='flex' $gap='5px'>
              <span>—— </span>
              <Text as='span' $alignItems='start' $display='flex' $direction='column'>
                <span>Fluid </span>
                <span>Designer</span>
              </Text>
            </Text>
          }
        />
      </motion.a>
      <Flex
        id='text-wrapper'
        $position='relative'
        $maxWidth='1000px'
        $w='100%'
        $padding={'2rem'}
        $userSelect='none'
        $justifyContent='space-between'
        $fontFamily={theme?.tokens?.fonts?.headerLight}>
        <AnimatedName firstLine='Stefania' secondLine='Galazzo' gradient={h3Gradient} />

        <AnimatedName
          firstLine='Isabella'
          secondLine='de Biasi'
          fontFamily={theme?.tokens?.fonts?.headerLight}
          gradient={h3Gradient2}
        />
      </Flex>
    </HeroWrapper>
  )
}
