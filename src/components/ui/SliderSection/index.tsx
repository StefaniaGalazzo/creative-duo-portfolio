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
              <Image src={proj?.imgSrc} $overflow='hidden' width={'auto'} $aspectRatio='1/1' className='hoverable' />
              <Flex $direction='column' $alignItems='start' $gap='2rem' $height={'90%'} className='proj-txt-container'>
                <Text as='h2' children={proj.title} className='hoverable proj-title' />
                <Text children={proj.description} className='proj-descr' />
                <Button children={proj.buttonText} />
              </Flex>
            </SliderWrapper>
          ))}
      </motion.div>
    </SliderContainer>
  )
}
