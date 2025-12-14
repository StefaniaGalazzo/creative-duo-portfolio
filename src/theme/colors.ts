export const defaultColors = {
  // Background & Surfaces
  surface: '#130349',
  transparentLight: '#ffffff3d',
  transparentDark: '#0101013d',

  // main
  mainColor: '#120242ff',

  // Brand colors
  accent1: '#E6FF9D',
  accent2: '#6633FF',
  accent3: '#ffaccfff',

  // Decorative
  detail1: '#eef8d1ff',
  detail2: 'rgba(190, 194, 252, 1)',
  detail3: '#ffc5ddff',

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
  surface: '#0b0229ff',
  transparentLight: '#ffffff3d',
  transparentDark: '#0101013d',

  // main
  mainColor: '#120242ff',

  // Brand colors
  accent1: '#E6FF9D',
  accent2: '#6633FF',
  accent3: '#ffaccfff',

  // Decorative
  detail1: '#eef8d1ff',
  detail2: 'rgba(190, 194, 252, 1)',
  detail3: '#ffc5ddff',

  // Feedback
  muted: '#C4C5D8',
  success1: '#ADEDCB',
  success2: '#067C5D',
  alert1: '#FED1B9',
  alert2: '#F2804B',
  error: '#DE1503',
} as const

export type ColorPalette = { [K in keyof typeof defaultColors]: string }
