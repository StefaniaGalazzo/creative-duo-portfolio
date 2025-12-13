import { ButtonWrapper } from './styled'

type ButtonProps = {
  as?: string | 'button' | 'a'
  title?: string
  disabled?: boolean
  onClick?: () => void
  subtitle?: string
  variant?: string | 'listen'
  href?: string
  children: string | number | React.ReactNode
}

export const Button = ({ children, href, variant, onClick, disabled }: ButtonProps) => {
  const linkProps = href ? { href } : undefined
  return (
    <ButtonWrapper onClick={onClick} $variant={variant} {...linkProps} disabled={disabled}>
      {children}
    </ButtonWrapper>
  )
}
