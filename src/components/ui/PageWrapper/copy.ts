// src/components/ui/PageWrapper/copy.ts

export type PersonRole = 'designer' | 'copywriter'

export interface PersonData {
  // Identity
  name: string
  role: PersonRole
  emoji: string // Elemento/icona rappresentativa

  // Bio Info
  age: string // Permette formattazione custom (es. "Gli anni di Cristo (+3)")
  element: string
  profession: string
  professionSince: string
  professionBefore: string
  professionAfter: string
  city: string

  // Preferences
  favoriteBook: {
    title: string
    author: string
  }
  favoriteColor: string
  favoriteQuote: {
    text: string
    author: string
  }

  // Contact
  phone: string
  email: string

  // Content
  bio: {
    intro: string // Primo paragrafo
    body: string // Secondo paragrafo (opzionale)
  }

  // Assets
  imagePath?: string // Path all'immagine profilo
  cvPath?: string // Path al CV
}

// ============================================
// COPY DATA
// ============================================

export const pageCopy: Record<PersonRole, PersonData> = {
  designer: {
    // Identity
    name: 'Stefania Galazzo',
    role: 'designer',
    emoji: '⚡',

    // Bio Info
    age: 'Gli anni di Cristo (+3)',
    element: 'Acqua',
    profession: 'Graphic Designer / Front-end Developer',
    professionSince: '2019',
    professionBefore: 'Graphic Designer e basta',
    professionAfter: 'Eremita sulla spiaggia',
    city: 'Torino',

    // Preferences
    favoriteBook: {
      title: 'Scritto sul corpo',
      author: 'Jeanette Winterson',
    },
    favoriteColor: 'Il blu dello sfondo del sito',
    favoriteQuote: {
      text: 'Complicare è facile...complicare è facile...',
      author: 'semicit',
    },

    // Contact
    phone: '+39 3922615099',
    email: 'galazzostefania@gmail.com',

    // Content
    bio: {
      intro: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
              Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
              autem, ab assumenda libero consequatur incidunt! Atque.`,
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
             Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
             autem, ab assumenda libero consequatur incidunt! Atque.`,
    },

    // Assets
    imagePath: undefined, // TODO: Add image
    cvPath: undefined, // TODO: Add CV
  },

  copywriter: {
    // Identity
    name: 'Isabella De Biasi',
    role: 'copywriter',
    emoji: '⚡', // Psico

    // Bio Info
    age: 'Non si dice! (29)',
    element: 'Psico',
    profession: 'Copywriter',
    professionSince: '2022',
    professionBefore: 'Content manager',
    professionAfter: 'Finirò di scrivere il mio libro (forse)',
    city: 'Torino',

    // Preferences
    favoriteBook: {
      title: 'I figli della mezzanotte',
      author: 'Salman Rushdie',
    },
    favoriteColor: 'Qualsiasi tonalità di blu',
    favoriteQuote: {
      text: 'Chi molto troppo, nulla niente',
      author: 'Anonimo',
    },

    // Contact
    phone: '+39 3481746154',
    email: 'isabelladbiasi@gmail.com',

    // Content
    bio: {
      intro: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
              Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
              autem, ab assumenda libero consequatur incidunt! Atque.`,
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
             Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
             autem, ab assumenda libero consequatur incidunt! Atque.`,
    },

    // Assets
    imagePath: undefined, // TODO: Add image
    cvPath: undefined, // TODO: Add CV
  },
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get person data by role
 */
export function getPersonData(role: PersonRole): PersonData {
  return pageCopy[role]
}

/**
 * Get person data by name slug (for routing)
 */
export function getPersonDataBySlug(slug: string): PersonData | null {
  const normalizedSlug = slug.toLowerCase()

  // Map slugs to roles
  const slugMap: Record<string, PersonRole> = {
    stefania: 'designer',
    'stefania-galazzo': 'designer',
    isabella: 'copywriter',
    'isabella-de-biasi': 'copywriter',
  }

  const role = slugMap[normalizedSlug]
  return role ? pageCopy[role] : null
}

/**
 * Format bio info items for rendering
 */
export function formatBioInfo(data: PersonData) {
  return [
    { label: 'Nome:', value: data.name },
    { label: 'Età:', value: data.age },
    { label: 'Elemento:', value: data.element },
    { label: 'Professione:', value: data.profession },
    { label: 'Dal:', value: data.professionSince },
    { label: 'E prima?', value: data.professionBefore },
    { label: 'E dopo?', value: data.professionAfter },
    { label: 'Città:', value: data.city },
    { label: 'Libro preferito:', value: `${data.favoriteBook.title}, ${data.favoriteBook.author}` },
    { label: 'Colore preferito:', value: data.favoriteColor },
    { label: 'Citazione preferita:', value: `"${data.favoriteQuote.text}" - ${data.favoriteQuote.author}` },
  ]
}
