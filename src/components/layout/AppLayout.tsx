// src/layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import { Navbar } from '..'
import { Box } from '../elements/Box'
import { useTheme } from '../../theme/ThemeProvider'
import CustomCursor from '../ui/CustomCursor'
import { FooterSocials } from '../ui/FooterSocials'
import { FluidPageTransition } from '../ui/FluidPageTransition'

export default function AppLayout() {
  const { theme } = useTheme()

  return (
    <CustomCursor>
      {/* Fluid Transition - sopra tutto */}
      <FluidPageTransition />

      <Box $w='100%' $bg={theme.colors.surface} $color={theme?.colors?.detail1} id='app-layout'>
        <Navbar />
        <main>
          <Box id='hero-col-1' $borderRight={`2px solid ${theme.colors.detail1}`} $height={'100%'} $desktopOnly />
          <Box $maxWidth='1400px' $p={'0 0 0'}>
            <Outlet />
            <FooterSocials variant='home' />
          </Box>
          <Box id='hero-col-2' $borderLeft={`2px solid ${theme.colors.detail1}`} $height={'100%'} $desktopOnly />
        </main>
      </Box>
    </CustomCursor>
  )
}
