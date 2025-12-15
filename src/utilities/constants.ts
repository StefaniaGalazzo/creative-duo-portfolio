import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

// mainly used in FooterSocials
export const SOCIALS = [
  {
    mainLabel: 'linkedin',
    icon: IoLogoLinkedin,
    label_1: 'Ste',
    label_2: 'Isa',
    href_1: 'https://www.linkedin.com/in/stefania-galazzo-frontend-developer/',
    href_2: 'https://www.linkedin.com/in/isabella-de-biasi/',
  },
  {
    mainLabel: 'instagram',
    icon: IoLogoInstagram,
    label_1: 'Ste',
    label_2: 'Isa',
    href_1: 'https://www.instagram.com/stefania_galazzo/',
    href_2: 'https://www.instagram.com/dbisabella/',
  },
  {
    mainLabel: 'github',
    icon: IoLogoGithub,
    label_1: 'Ste',
    label_2: null,
    href_1: 'https://github.com/StefaniaGalazzo',
    href_2: null,
  },
] as const
