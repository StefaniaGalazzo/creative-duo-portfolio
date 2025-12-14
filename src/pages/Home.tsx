import { Flex, Hero, SliderSection, TextSection } from '../components'

export default function Home() {
  return (
    <Flex $direction='column'>
      <Hero />
      <TextSection />
      <SliderSection />
      <TextSection />
    </Flex>
  )
}
