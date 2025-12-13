import { motion } from 'framer-motion'

type FluidFillProps = {
  isHovered: boolean
}

export function FluidFill({ isHovered }: FluidFillProps) {
  return (
    <svg viewBox='0 0 100 100' preserveAspectRatio='none' className='fluid-fill'>
      <motion.path
        d={CLOSED}
        animate={{
          d: isHovered ? OPEN : CLOSED,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1], // Easing più fluido
        }}
        fill='currentColor'
      />
    </svg>
  )
}

// Path che simula un liquido che sale dal basso con curve organiche
const CLOSED = `
  M0 100
  Q25 98 50 98
  T100 100
  L100 100 L0 100 Z
`

const OPEN = `
  M0 0
  Q25 10 50 20
  Q75 30 100 45
  L100 100 L0 100 Z
`

// ALTERNATIVE PATHS - Prova queste per effetti diversi:

// Opzione 1: Onda liquida morbida
// const CLOSED = `M0 100 C30 100 70 100 100 100 L100 100 L0 100 Z`
// const OPEN = `M0 0 C30 25 70 35 100 50 L100 100 L0 100 Z`

// Opzione 2: Splash asimmetrico (più dinamico)
// const CLOSED = `M0 100 Q50 98 100 100 L100 100 L0 100 Z`
// const OPEN = `M0 0 Q40 30 80 45 T100 65 L100 100 L0 100 Z`

// Opzione 3: Riempimento turbinante
// const CLOSED = `M0 100 C20 100 40 100 60 100 C80 100 100 100 100 100 L100 100 L0 100 Z`
// const OPEN = `M0 0 C20 20 40 30 60 40 C80 50 95 60 100 75 L100 100 L0 100 Z`
