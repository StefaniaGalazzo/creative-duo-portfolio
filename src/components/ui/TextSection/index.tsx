import { useTheme } from '../../../theme/ThemeProvider'
import { Text } from '../../elements'
import { TxtSectionWrapper } from './styles'

export default function TextSection({
  title = 'Lorem Ipsum',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec dui blandit, aliquet sapien sed, posuere libero. Mauris lorem ligula, cursus in ligula vitae, iaculis faucibus metus. Mauris ut lorem venenatis, egestas odio vel, dictum purus. Morbi felis ipsum, ultricies et nisi sit amet, venenatis facilisis ipsum. Mauris non justo mattis, feugiat justo in, aliquet mi. Sed vitae dignissim magna. Praesent blandit maximus lobortis.',
}) {
  const { theme } = useTheme()
  return (
    <TxtSectionWrapper>
      <Text as='h1' $fontSize='3rem' $fontFamily={theme?.tokens?.fonts?.headerBold}>
        {title}
      </Text>
      <Text>{description}</Text>
    </TxtSectionWrapper>
  )
}
