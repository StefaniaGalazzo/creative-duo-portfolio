import { HeroWrapper } from './styles'
import { Text } from '../../elements/Text'
import { TextWrap } from '../../elements/Text/styled'
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

      <TextWrap
        id='text-wrapper'
        $position='relative'
        $display='flex'
        $direction='column'
        $gap={'5rem'}
        $w='100%'
        $padding={'2rem'}
        $userSelect='none'>
        <Text $w={'100%'} $display='flex' $justifyContent='space-between' $alignItems='center'>
          <Text
            as='h1'
            $fontFamily={theme?.tokens?.fonts?.paragraph}
            $fontWeight={'normal'}
            $fontSize='1.17em'
            children={
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
            children={'Isabella de Biasi'}
            $fontSize='5rem'
            $alignSelf='flex-start'
            $gradient={h3Gradient}
            $gradientClip={true}
          />
        </Text>

        <Text $w={'100%'} $display='flex' $justifyContent='space-between' $alignItems='center'>
          <Text
            as='h3'
            children={'Stefania Galazzo'}
            $fontSize='5rem'
            $alignSelf='flex-end'
            $gradient={h3Gradient}
            $gradientClip={true}
          />

          <Text
            as='h1'
            $fontFamily={theme?.tokens?.fonts?.paragraph}
            $fontWeight={'normal'}
            $fontSize='1.17em'
            children={
              <Text as='p' $display='flex' $gap='5px'>
                <span>—— </span>
                <Text as='span' $alignItems='start' $display='flex' $direction='column'>
                  <span>Fluid </span>
                  <span>Designer</span>
                </Text>
              </Text>
            }
          />
        </Text>
      </TextWrap>
    </HeroWrapper>
  )
}
