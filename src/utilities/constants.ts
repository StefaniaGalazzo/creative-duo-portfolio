import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

export const projectCopy = [
  {
    title: 'Blogwig: Read well, write better.',
    description:
      'Visual per articoli di divulgazione, claim, veri e propri spazi divulgativi che parlino dell’azienda a cui appartengono e che sappiano arrivare al cuore di chi li legge.',
    buttonText: 'Take a tour',
    buttonLink: '#',
    imgSrc: '/blogwig.png',
  },
  {
    title: 'Ludwig.guru',
    description:
      'Realizzazione e ottimizzazione copy in ottica SEO, sviluppo layout desktop e mobile, tema applicazione.',
    buttonText: 'Take a tour',
    buttonLink: '#',
    imgSrc: '/ludwig.png',
  },
  {
    title: 'Titolone pazzesco 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Take a tour',
    buttonLink: '#',
    imgSrc: '/ludwig.png',
  },
  {
    title: 'Titolone pazzesco 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'Take a tour',
    buttonLink: '#',
    imgSrc: '/ludwig.png',
  },
]

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
