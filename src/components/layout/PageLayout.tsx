import { Box } from '../elements'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../theme/ThemeProvider'
import { AnimatedBackground } from '../ui'

export default function PageLayout() {
  const { theme } = useTheme()
  return (
    <Box $cursor='auto' $position='relative'>
      <AnimatedBackground />

      <Box $w='100%' $color={theme?.colors?.detail1} $position='relative' id='ste-layout'>
        <main>
          <Box id='hero-col-1' $height={'100%'} />
          <Box $maxWidth='1200px' $margin='auto'>
            <Outlet />
          </Box>
          <Box id='hero-col-2' $height={'100%'} />
        </main>
      </Box>
    </Box>
  )
}
