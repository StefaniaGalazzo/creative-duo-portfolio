import { HeroWrapper } from './styles'
import { Box } from '../../elements/Box'
import { Text } from '../../elements/Text'
import { useTheme } from 'styled-components'
import { TextWrap } from '../../elements/Text/styled'
export default function Hero() {
  const theme = useTheme()
  return (
    <HeroWrapper id='hero-wrapper'>
      <Box id='hero-col-1' $borderRight={'2px solid #fff'} $height={'100%'} />
      <TextWrap id='text-wrapper' $position='relative'>
        <Text as='h3' children={'Isabella de Biasi'} $fontSize='5rem' $alignSelf='flex-start' />
        <Text as='h3' children={'Stefania Galazzo'} $fontSize='5rem' $alignSelf='flex-end' />
        <Text
          as='h3'
          children={' —— Based in Turin —'}
          $position='absolute'
          $top='80px'
          $left='90%'
          $align='right'
          $fontFamily={theme?.tokens?.fonts?.paragraph}
          $fontWeight={'normal'}
        />
        <Text
          as='h1'
          $fontFamily={theme?.tokens?.fonts?.paragraph}
          $fontWeight={'normal'}
          $fontSize='1.17em'
          children={
            <Text as='p' $display='flex' $gap='5px'>
              <span>—— </span>
              <Text as='span' $align='left' $display='flex' $direction='column'>
                <span>Punchy </span>
                <span>Copiwriter</span>
              </Text>
            </Text>
          }
        />
        <Text
          as='h1'
          $fontFamily={theme?.tokens?.fonts?.paragraph}
          $fontWeight={'normal'}
          $fontSize='1.17em'
          children={
            <Text as='p' $display='flex' $gap='5px'>
              <span>—— </span>
              <Text as='span' $align='left' $display='flex' $direction='column'>
                <span>Fluid </span>
                <span>Designer</span>
              </Text>
            </Text>
          }
        />
      </TextWrap>
      <Box id='hero-col-2' $borderLeft={'2px solid #fff'} $height={'100%'} />
    </HeroWrapper>
  )
}
