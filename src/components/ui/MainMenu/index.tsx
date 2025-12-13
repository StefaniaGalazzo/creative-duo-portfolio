import { motion } from 'framer-motion'
import { MainMenuWrapper, MenuLinks, FooterGrid } from './styles'
import { Link } from 'react-router-dom'

export default function MainMenu({ open }) {
  return (
    <motion.div
      initial={{ y: '-100%', opacity: 0 }}
      animate={open ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} // accelerazione morbida
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}>
      <MainMenuWrapper id='main-menu-wrapper'>
        <MenuLinks id='main-menu-links'>
          <Link to='/isa'>isa</Link>
          <Link to='/ste'>ste</Link>
        </MenuLinks>

        <FooterGrid id='main-menu-footer'>
          <Link to='https://linkedin.com' target='_blank'>
            linkedin
          </Link>
          <Link to='https://instagram.com' target='_blank'>
            instagram
          </Link>
          <Link to='https://github.com' target='_blank'>
            github
          </Link>
        </FooterGrid>
      </MainMenuWrapper>
    </motion.div>
  )
}
