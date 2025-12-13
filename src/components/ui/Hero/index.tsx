import { HeroWrapper } from './styles'
import { Flex, MagneticBadge, Text } from '../../elements'
import { useTheme } from '../../../theme/ThemeProvider'

export default function Hero() {
  const { theme } = useTheme()

  // Definisci i gradienti che cambiano con il tema
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
        $gap={'5rem'}
        $w='100%'
        $padding={'2rem'}
        $userSelect='none'>
        <Flex $w={'100%'} $display='flex' $justifyContent='space-between' $alignItems='center'>
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
          <Text
            as='h3'
            className='name'
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
        </Flex>

        <Flex $w={'100%'} $display='flex' $justifyContent='space-between' $alignItems='center'>
          <Text
            as='h3'
            className='name'
            children={'Stefania Galazzo'}
            $alignSelf='flex-end'
            $gradient={h3Gradient}
            $gradientClip={true}
          />

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
        </Flex>
      </Flex>
    </HeroWrapper>
  )
}
