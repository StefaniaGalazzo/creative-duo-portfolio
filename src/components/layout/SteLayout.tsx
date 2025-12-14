import { Box } from '../elements'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../theme/ThemeProvider'
import { AnimatedBackground, Navbar } from '../ui'
// import CustomCursor from '../ui/CustomCursor'

export default function SteLayout() {
  const { theme } = useTheme()
  return (
    <Box $cursor='auto'>
      {/* Background animato con gradienti morphing */}
      <AnimatedBackground />
      <Navbar />

      <Box $w='100%' $color={theme?.colors?.detail1} $position='relative' id='ste-layout'>
        <main>
          <Box $maxWidth='1400px' $p={'0 0 5rem 0'}>
            <Outlet />
          </Box>
        </main>
      </Box>
    </Box>
  )
}
