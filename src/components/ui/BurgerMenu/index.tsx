import { useTheme } from '../../../theme/ThemeProvider'
import { BurgerWrapper, BurgerLine } from './styles'

export function BurgerMenu({ open, toggle }) {
  const { theme } = useTheme()
  return (
    <BurgerWrapper id='burger-menu' onClick={toggle} $open={open}>
      <BurgerLine $open={open} $color={open ? theme?.colors.accent2 : 'currentColor'} />
      <BurgerLine $open={open} $color={open ? theme?.colors.accent2 : 'currentColor'} />
    </BurgerWrapper>
  )
}
