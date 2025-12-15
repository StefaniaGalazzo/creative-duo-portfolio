import { motion } from 'framer-motion'
import { Button, Flex, Image, Text } from '../../elements'
import { SliderWrapper, SliderContainer } from './styles'
import { useHorizontalScroll } from '../../../hooks'
import { projectCopy } from '../../../utilities/constants'

export default function SliderSection() {
  const { containerRef, scrollRef, x, handleMouseEnter, handleMouseLeave } = useHorizontalScroll({
    speed: 1,
    smoothness: 100,
    damping: 30,
  })

  return (
    <SliderContainer ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div ref={scrollRef} style={{ x, display: 'flex' }}>
        {projectCopy &&
          projectCopy.map((proj, index) => (
            <SliderWrapper key={index} id='slider-section'>
              <Image $border='2px solid white' width={'auto'} height={'300px'} $aspectRatio='1/1' />
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
