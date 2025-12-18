import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

export const projectCopy = [
  {
    title: 'Blogwig: Read well, write better',
    description:
      'Visual per articoli di divulgazione, claim, veri e propri spazi divulgativi che parlino dell’azienda a cui appartengono e che sappiano arrivare al cuore di chi li legge.',
    buttonText: 'Punchy Copy',
    buttonLink: '#',
    imgSrc: '/blogwig.png',
  },
  {
    title: 'Ludwig.guru',
    description:
      'Realizzazione e ottimizzazione copy in ottica SEO, sviluppo layout desktop e mobile, tema applicazione.',
    buttonText: 'Together',
    buttonLink: '#',
    imgSrc: '/ludwig.png',
  },
  {
    title: 'Blogwig community',
    description:
      'Visual per articoli di divulgazione, claim, veri e propri spazi divulgativi che parlino dell’azienda a cui appartengono e che sappiano arrivare al cuore di chi li legge.',
    buttonText: 'Together',
    buttonLink: '#',
    imgSrc: '/ludwig.png',
  },
  {
    title: 'Tiraditto: Grano gentile ritrovato',
    description:
      'Tiraditto, la riscoperta del grano gentile e del frumento di Sicilia. Realizzazione brand identity, food photography, packaging. ',
    buttonText: 'Fluid Designer',
    buttonLink: '#',
    imgSrc: '/tiraditto.png',
  },
  {
    title: 'Kidimpro: Movimento e improvvisazione',
    description:
      'Un modo di esplorare insieme i gesti, il movimento, i suoni, la voce e la creatività. Realizzazione brand identity, motion graphic, postcards, merchandising, wordpress.',
    buttonText: 'Fluid Designer',
    buttonLink: '#',
    imgSrc: '/kidimpro.jpg',
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
