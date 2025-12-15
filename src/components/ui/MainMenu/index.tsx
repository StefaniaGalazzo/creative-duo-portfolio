import { motion } from 'framer-motion'
import { MainMenuWrapper, MenuLinks } from './styles'
import { Link } from 'react-router-dom'
import { FooterSocials } from '../FooterSocials'

export default function MainMenu({ open }) {
  return (
    <motion.div
      initial={{ y: '-100%', opacity: 0 }}
      animate={open ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} // accelerazione morbida
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1 }}>
      <MainMenuWrapper id='main-menu-wrapper'>
        <MenuLinks id='main-menu-links'>
          <Link to='/isabella'>Isabella</Link>
          <Link to='/stefania'>Stefania</Link>
        </MenuLinks>

        <FooterSocials variant='menu' />
      </MainMenuWrapper>
    </motion.div>
  )
}
