export const defaultColors = {
  // Background & Surfaces
  surface: '#120242ff',
  transparentLight: '#ffffff3d',
  transparentDark: '#0101013d',

  // Brand colors
  accent1: '#E6FF9D',
  accent2: '#6633FF',
  accent3: '#ffaccfff',

  // Decorative
  detail1: '#EFC5F7',
  detail2: '#BDC1FF',
  detail3: '#DDE0FF',
  detail4: '#fcecff',

  // Feedback
  muted: '#C4C5D8',
  success1: '#ADEDCB',
  success2: '#067C5D',
  alert1: '#FED1B9',
  alert2: '#F2804B',
  error: '#DE1503',
} as const

export const vibrantColors = {
  // Background & Surfaces
  mainBg: '#101010',
  surface: '#181818',
  text: '#f5f5f5',
  transparentLight: '#ffffff3d',
  transparentDark: '#0101013d',

  // Brand colors (più saturati per dark mode)
  accent1: '#4D59FF',
  accent2: '#656FFF',

  // Decorative (adattati per dark)
  detail1: '#8B4F9F',
  detail2: '#5D61BF',
  detail3: '#7D80CF',
  detail4: '#604864ff',

  // Feedback
  muted: '#555555',
  success1: '#2D7A5F',
  success2: '#0A9C7D',
  alert1: '#CC6633',
  alert2: '#FF9955',
  error: '#FF3322',
} as const

export type ColorPalette = { [K in keyof typeof defaultColors]: string }
