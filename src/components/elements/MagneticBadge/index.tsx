import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '../../../hooks'
import { BadgeWrapper, FillLayer } from './styles'

type Variant = 'punchy' | 'fluid'

type MagneticBadgeProps = {
  label: React.ReactNode
  variant?: Variant
}

export function MagneticBadge({ label, variant = 'punchy' }: MagneticBadgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const magnetic = useMagnetic(ref, 0.05)

  return (
    <BadgeWrapper ref={ref} as={motion.div} style={magnetic} $variant={variant}>
      <FillLayer $variant={variant} />
      <span>{label}</span>
    </BadgeWrapper>
  )
}
