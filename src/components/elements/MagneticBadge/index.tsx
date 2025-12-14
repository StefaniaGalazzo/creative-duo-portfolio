import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '../../../hooks'
import { BadgeWrapper, FillLayer } from './styles'
import { FluidFill } from './FluidFill'

type Variant = 'punchy' | 'fluid'

type MagneticBadgeProps = {
  label: React.ReactNode
  variant?: Variant
}

export function MagneticBadge({ label, variant = 'punchy' }: MagneticBadgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const magnetic = useMagnetic(ref, 0.05)
  const isFluid = variant === 'fluid'
  const [isHovered, setIsHovered] = useState(false)

  return (
    <BadgeWrapper
      ref={ref}
      style={magnetic}
      $variant={variant}
      className="hoverable"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isFluid ? <FluidFill isHovered={isHovered} /> : <FillLayer $variant={variant} />}
      <span>{label}</span>
    </BadgeWrapper>
  )
}
