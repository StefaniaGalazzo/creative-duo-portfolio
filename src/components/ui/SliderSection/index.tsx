import { motion } from 'framer-motion'
import { Button, Flex, Image, Text } from '../../elements'
import { SliderWrapper, SliderContainer } from './styles'
import { useHorizontalScroll } from '../../../hooks'

export default function SliderSection() {
  const { containerRef, scrollRef, x, handleMouseEnter, handleMouseLeave } = useHorizontalScroll({
    speed: 1,
    smoothness: 100,
    damping: 30,
  })

  const pojectCopy = [
    {
      title: 'Titolone pazzesco 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Take a tour',
      buttonLink: '#',
    },
    {
      title: 'Titolone pazzesco 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Take a tour',
      buttonLink: '#',
    },
    {
      title: 'Titolone pazzesco 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Take a tour',
      buttonLink: '#',
    },
    {
      title: 'Titolone pazzesco 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Take a tour',
      buttonLink: '#',
    },
  ]

  return (
    <SliderContainer ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div ref={scrollRef} style={{ x, display: 'flex' }}>
        {pojectCopy &&
          pojectCopy.map((proj, index) => (
            <SliderWrapper key={index} id='slider-section'>
              <Image $border='2px solid white' width={'50%'} height={'100%'} $aspectRatio='1/1' />
              <Flex $direction='column' $alignItems='start' $gap='1.5' $height={'90%'}>
                <Text as='h2' children={proj.title} $fontSize='3.2rem' />
                <Text children={proj.description} />
                <Button children={proj.buttonText} />
              </Flex>
            </SliderWrapper>
          ))}
      </motion.div>
    </SliderContainer>
  )
}
