import { keyframes } from 'styled-components'

export const tokens = {
  // Border
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },

  // Typography
  fonts: {
    headingBold: "'Migra-Extrabold', serif",
    headingLight: "'Migra-Extralight', serif",
    paragraph: '"Montserrat", sans-serif',
    // system: 'system-ui, sans-serif',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem', // 32px
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  // Transizions and Global Animations
  transition: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  shadows: {
    medium: '0 4px 12px rgba(0,0,0,0.15)',
  },

  animations: {
    pulse: keyframes`
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 8px rgba(255, 107, 107, 0);
      }
    `,
    fadeIn: keyframes`
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    `,
    rotate: keyframes`
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,
    bounce: keyframes`
     0%, 80%, 100% { opacity: 0.4; transform: scale(0.9); }
      40% { opacity: 1; transform: scale(1.2); }
`,
    wave: keyframes`
     0%, 100% { height: 20%; }
      50% { height: 100%; }
`,
    float: keyframes`
  0%, 100% {
    transform: translate(-50%, -3px);
  }
  50% {
    transform: translate(-50%, 0px);
  }
`,
  },
  effects: {
    blurSM: 'blur(3px)',
    blurM: 'blur(5px)',
    blurL: 'blur(20px)',
  },
} as const

export type Tokens = typeof tokens
