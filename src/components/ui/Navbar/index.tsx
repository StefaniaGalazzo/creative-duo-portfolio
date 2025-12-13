import { useState } from 'react'
import { NavWrapper } from './styles'
import { BurgerMenu } from '../BurgerMenu'
import MainMenu from '../MainMenu'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <NavWrapper id='nav-wrapper'>
      <MainMenu open={open} />
      <BurgerMenu open={open} toggle={() => setOpen(!open)} />
    </NavWrapper>
  )
}
