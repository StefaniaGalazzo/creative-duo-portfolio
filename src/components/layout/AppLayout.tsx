// src/layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import { Navbar } from '..'
import { Box } from '../elements/Box'
import { useTheme } from '../../theme/ThemeProvider'
import CustomCursor from '../ui/CustomCursor'

export default function AppLayout() {
  const { theme } = useTheme()

  return (
    <CustomCursor>
      <Box $w='100%' $bg={theme.colors.surface} $color={theme?.colors?.detail1} id='app-layout'>
        <Navbar />
        <main>
          <Box id='hero-col-1' $borderRight={`2px solid ${theme.colors.detail1}`} $height={'100%'} />
          <Box $maxWidth='1400px' $p={'0 0 5rem 0'}>
            <Outlet />
          </Box>
          <Box id='hero-col-2' $borderLeft={`2px solid ${theme.colors.detail1}`} $height={'100%'} />
        </main>
      </Box>
    </CustomCursor>
  )
}
