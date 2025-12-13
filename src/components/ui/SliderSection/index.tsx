import { Button, Flex, Image, Text } from '../../elements'
import { SliderWrapper } from './styles'

export default function SliderSection() {
  const pojectCopy = [
    {
      title: 'Titolone pazzesco',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Take a tour',
      buttonLink: '#',
    },
    {
      title: 'Titolone pazzesco',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Take a tour',
      buttonLink: '#',
    },
    {
      title: 'Titolone pazzesco',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Take a tour',
      buttonLink: '#',
    },
  ]
  return (
    <Flex>
      {pojectCopy &&
        pojectCopy.map((proj) => (
          <SliderWrapper id='slider-section'>
            <Image $border='2px solid white' width={'50%'} height={'100%'} aspectRatio='1/1' />
            <Flex $direction='column' $alignItems='start' $gap='1.5' $height={'90%'}>
              <Text as='h2' children={proj.title} $fontSize='3.2rem' />
              <Text children={proj.description} />
              <Button children={proj.buttonText} />
            </Flex>
          </SliderWrapper>
        ))}
    </Flex>
  )
}
