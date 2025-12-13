import { BurgerWrapper, BurgerLine } from './styles'

export function BurgerMenu({ open, toggle }) {
  return (
    <BurgerWrapper id='burger-menu' onClick={toggle} $open={open}>
      <BurgerLine $open={open} />
      <BurgerLine $open={open} />
    </BurgerWrapper>
  )
}
