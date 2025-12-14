import { motion } from 'framer-motion'
import { HeroWrapper } from './styles'
import { Flex, MagneticBadge, Text } from '../../elements'
import { useTheme } from '../../../theme/ThemeProvider'

// Container con overflow hidden (la "finestra")
const TextWindow = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    style={{
      overflow: 'hidden',
      display: 'inline-block',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.01, delay }}>
    <motion.div
      initial={{
        y: '142%',
        rotateZ: 7,
        scale: 1,
      }}
      animate={{
        y: '0%',
        rotateZ: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}>
      {children}
    </motion.div>
  </motion.div>
)

export default function Hero() {
  const { theme } = useTheme()

  const h3Gradient =
    theme.mode === 'light'
      ? `linear-gradient(135deg, ${theme.colors.mainColor}, ${theme.colors.accent2}, ${theme.colors.detail1}, ${theme.colors.accent3})`
      : `linear-gradient(135deg, ${theme.colors.accent1}, ${theme.colors.detail2}, ${theme.colors.detail3})`

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

      <Flex
        id='text-wrapper'
        $position='relative'
        $direction='column'
        $gap={'1.5rem'}
        $w='100%'
        $padding={'2rem'}
        $userSelect='none'>
        <Flex $w={'100%'} $display='flex' $justifyContent='space-between' $alignItems='center'>
          <motion.div
            className='hoverable'
            initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}>
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
          </motion.div>

          <TextWindow delay={0.4}>
            <Text
              as='h3'
              className='name'
              $align='right'
              children={
                <>
                  <Text as='span' $fontFamily={theme?.tokens?.fonts?.headingLight}>
                    Isabella
                  </Text>{' '}
                  <Text as='span' $fontFamily={theme?.tokens?.fonts?.headingLight}>
                    de Biasi
                  </Text>
                </>
              }
              $alignSelf='flex-start'
              $gradient={h3Gradient}
              $gradientClip={true}
            />
          </TextWindow>
        </Flex>

        <Flex $w={'100%'} $display='flex' $justifyContent='space-between' $alignItems='center'>
          <TextWindow delay={0.6}>
            <Text
              as='h3'
              className='name'
              $align='left'
              children={'Stefania Galazzo'}
              $alignSelf='flex-end'
              $gradient={h3Gradient}
              $gradientClip={true}
            />
          </TextWindow>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateZ: 10 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}>
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
          </motion.div>
        </Flex>
      </Flex>
    </HeroWrapper>
  )
}
