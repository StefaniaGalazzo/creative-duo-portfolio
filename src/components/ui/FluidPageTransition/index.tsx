import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../../../theme/ThemeProvider'

export function FluidPageTransition() {
  const { theme } = useTheme()
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Reset per ogni cambio pagina
    setIsTransitioning(true)
    setProgress(0)

    // Simula progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 300)
      }
    }, 80) // ~800ms totale

    return () => clearInterval(interval)
  }, [location.pathname])

  if (!isTransitioning) return null

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          pointerEvents: 'none',
        }}>
        {/* SVG Fluid Fill */}
        <svg
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}>
          {/* <defs>
            <linearGradient id='pageFluidGradient' x1='0%' y1='100%' x2='0%' y2='0%'>
              <stop offset='0%' stopColor='#3b54ff' stopOpacity='0.95' />
              <stop offset='50%' stopColor='#959ded' stopOpacity='0.9' />
              <stop offset='100%' stopColor='#e9f8fd' stopOpacity='0.85' />
            </linearGradient>
          </defs> */}

          <motion.path
            d={getFluidPath(progress)}
            fill={theme?.colors.accent1}
            initial={{ d: FILLED }}
            animate={{ d: getFluidPath(progress) }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </svg>

        {/* Percentage Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '80px',
            fontWeight: '700',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textShadow: '0 4px 40px rgba(0, 0, 0, 0.3)',
            letterSpacing: '-3px',
          }}>
          {/* {progress}% */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Helper per ottenere il path in base al progress (INVERTITO!)
function getFluidPath(progress: number): string {
  const p = progress / 100

  // Invertiamo la logica: da PIENO a VUOTO
  if (p < 0.3) {
    // 0-30%: Da pieno a metà
    const t = p / 0.3
    return interpolatePath(FILLED, WAVE_TOP, t)
  } else if (p < 0.7) {
    // 30-70%: Da metà a quasi vuoto
    const t = (p - 0.3) / 0.4
    return interpolatePath(WAVE_TOP, WAVE_MIDDLE, t)
  } else {
    // 70-100%: Svuotamento finale
    const t = (p - 0.7) / 0.3
    return interpolatePath(WAVE_MIDDLE, CLOSED, t)
  }
}

// Helper per interpolare tra due path
function interpolatePath(path1: string, path2: string, t: number): string {
  const nums1 = path1.match(/-?\d+\.?\d*/g)?.map(Number) || []
  const nums2 = path2.match(/-?\d+\.?\d*/g)?.map(Number) || []

  const interpolated = nums1.map((n1, i) => {
    const n2 = nums2[i] || n1
    return n1 + (n2 - n1) * t
  })

  let result = path1
  let index = 0
  result = result.replace(/-?\d+\.?\d*/g, () => {
    return interpolated[index++].toFixed(1)
  })

  return result
}

// Path states - INVERTITI (parte da alto, scende verso basso)
// PIENO in alto (stato iniziale)
const FILLED = `
  M0 0
  C20 -2 40 2 60 0
  C80 -2 100 2 100 0
  L100 100 L0 100 Z
`

// Onda 1: Liquido scende con onde pronunciate
const WAVE_TOP = `
  M0 15
  C15 5 30 0 50 8
  C70 15 85 10 100 18
  L100 100 L0 100 Z
`

// Onda 2: Scende ancora più in basso
const WAVE_MIDDLE = `
  M0 55
  C15 40 30 35 50 45
  C70 55 85 50 100 58
  L100 100 L0 100 Z
`

// Completamente vuoto (stato finale)
const CLOSED = `
  M0 100
  C20 100 40 100 60 100
  C80 100 100 100 100 100
  L100 100 L0 100 Z
`
