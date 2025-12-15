// FooterSocials.tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIALS } from '../../../utilities/constants'
import { FooterGrid, SocialItem, SocialLinksRow } from './styles'
import { Text } from '../../elements'

export function FooterSocials() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <FooterGrid>
      {SOCIALS.map((social) => {
        const { mainLabel, icon: Icon, label_1, label_2, href_1, href_2 } = social

        return (
          <SocialItem key={mainLabel} onMouseEnter={() => setActive(mainLabel)} onMouseLeave={() => setActive(null)}>
            <AnimatePresence mode='wait'>
              {active === mainLabel ? (
                <SocialLinksRow
                  as={motion.div}
                  key='links'
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}>
                  {href_1 && (
                    <Text as='a' href={href_1} target='_blank' rel='noreferrer' $display='flex' $gap={'1rem'}>
                      {/* <Icon size={20} /> */}
                      {label_1}
                    </Text>
                  )}
                  {href_2 && (
                    <Text as='a' href={href_2} target='_blank' rel='noreferrer' $display='flex' $gap={'1rem'}>
                      {/* <Icon size={20} /> */}
                      {label_2}
                    </Text>
                  )}
                </SocialLinksRow>
              ) : (
                <Text
                  as={motion.span}
                  href={href_2}
                  target='_blank'
                  rel='noreferrer'
                  $display='flex'
                  $gap={'1rem'}
                  $alignItems='center'
                  key='label'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}>
                  <Icon size={20} />
                  {mainLabel}
                </Text>
              )}
            </AnimatePresence>
          </SocialItem>
        )
      })}
    </FooterGrid>
  )
}
