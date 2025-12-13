import { motion } from 'framer-motion'

type FluidFillProps = {
  isHovered: boolean
}

export function FluidFill({ isHovered }: FluidFillProps) {
  return (
    <svg viewBox='0 0 100 100' preserveAspectRatio='none' className='fluid-fill'>
      <motion.path
        animate={{
          d: isHovered ? [CLOSED, WAVE_MIDDLE, WAVE_TOP, FILLED] : CLOSED,
        }}
        transition={{
          duration: 0.5,
          ease: [0.5, 0.5, 0.5, 0.5],
          times: [0, 0.4, 0.7, 1],
        }}
        fill='currentColor'
      />
    </svg>
  )
}

// Tutti i path hanno la STESSA STRUTTURA di punti
// 2 curve di Bézier + chiusura

// 1. STATO INIZIALE: Chiuso in basso
const CLOSED = `
  M0 100
  C20 100 40 100 60 100
  C80 100 100 100 100 100
  L100 100 L0 100 Z
`

// 2. ONDA A METÀ: Liquido sale con curve prominenti
const WAVE_MIDDLE = `
  M0 60
  C20 50 40 45 60 50
  C80 55 90 60 100 65
  L100 100 L0 100 Z
`

// 3. ONDA IN ALTO: Quasi arrivato con onde più piccole
const WAVE_TOP = `
  M0 10
  C20 5 40 3 60 5
  C80 7 90 10 100 12
  L100 100 L0 100 Z
`

// 4. COMPLETAMENTE PIENO: Mantiene la struttura delle curve
const FILLED = `
  M0 0
  C20 0 40 0 60 0
  C80 0 100 0 100 0
  L100 100 L0 100 Z
`
