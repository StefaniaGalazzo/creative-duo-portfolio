import { Flex, Text } from '../../elements'
import { GoDownload } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Frame, TopBar, Circle, Pill, TopRow, LeafIcon, Inner, BottomBar } from './styles'
import { type PersonData, formatBioInfo } from './copy'
import Experience from '../Experience'

interface PageWrapperProps {
  data: PersonData
}

export default function PageWrapper({ data }: PageWrapperProps) {
  const bioInfo = formatBioInfo(data)

  return (
    <Frame>
      {/* Top Bar */}
      <TopBar>
        <TopRow>
          <Circle />
          <Pill children={data.name} />
        </TopRow>
        <Link to='/' style={{ position: 'absolute', right: 0, top: 0 }}>
          <LeafIcon shadow children='🏠' />
        </Link>
      </TopBar>

      {/* Main Content */}
      <Inner>
        <Flex $gap='2rem' $direction='column'>
          {/* Profile Section */}
          <Flex $gap='2rem' $wrap='wrap' $justifyContent='center'>
            {/* 3D - passa modelType dinamicamente */}
            <Experience modelType={data.modelType} />

            {/* Bio Info */}
            <Flex $gap='2rem' $direction='column' className='bio-info-container'>
              <Text as='p' $display='flex' $direction='column' $gap='0.5rem'>
                {bioInfo.map((item, index) => (
                  <span key={index} className='w-100'>
                    <span className='bold'>{item.label}</span> {item.value}
                  </span>
                ))}
              </Text>
            </Flex>
          </Flex>

          {/* Bio Paragraphs */}
          {/* {data?.bio.intro && <Text children={data.bio.intro} />} */}
          {/* {data?.bio.body && <Text children={data.bio.body} />} */}
        </Flex>
      </Inner>

      {/* Bottom Bar */}
      <BottomBar>
        {/* CV Download */}
        <Pill
          $h='100%'
          $radius='8px'
          $bg='#e9f8fd'
          $shadow
          style={{
            cursor: data.cvPath ? 'pointer' : 'not-allowed',
          }}
          onClick={() => {
            if (data.cvPath) {
              window.open(data.cvPath, '_blank')
            }
          }}>
          <GoDownload />
          <span> CV</span>
        </Pill>

        {/* Contact Info */}
        <Pill $h='auto' $radius='8px' $bg='#e9f8fd'>
          <LeafIcon children={data.emoji} $bg='' />
          <Text as='p' $m='0 0.5rem 0 0.5rem' children={`${data.phone} | ${data.email}`} />
        </Pill>
      </BottomBar>
    </Frame>
  )
}
