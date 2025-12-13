// src/layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import { Navbar } from '..'
import { Box } from '../elements/Box'

export default function AppLayout() {
  return (
    <Box $p={'0 0 5rem 0'} $w='100%' id='app-layout'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Box>
  )
}
