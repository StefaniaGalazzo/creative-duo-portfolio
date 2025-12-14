import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Loading from './components/ui/Loading'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import IsaLayout from './components/layout/IsaLayout'
import NotFound from './pages/NotFound'
import { ThemeProvider } from './theme/ThemeProvider'
import SteLayout from './components/layout/SteLayout'
import './index.css'

const Home = React.lazy(() => import('./pages/Home'))
const Isa = React.lazy(() => import('./pages/Isabella'))
const Ste = React.lazy(() => import('./pages/Stefania'))

// Utility per wrappare un componente lazy in <Suspense>
const wrap = (Component: React.LazyExoticComponent<any>) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: wrap(Home),
        handle: { title: 'Home' },
      },
    ],
  },

  {
    path: '/isabella',
    element: <IsaLayout />,
    children: [
      {
        index: true,
        element: wrap(Isa),
        handle: { pageTitle: 'Isabella De Biasi' },
      },
    ],
  },

  {
    path: '/stefania',
    element: <SteLayout />,
    children: [
      {
        index: true,
        element: wrap(Ste),
        handle: { pageTitle: 'Stefania Galazzo' },
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
