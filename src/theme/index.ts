// ============================================
// 📁 src/theme/index.ts
// ============================================
import { tokens } from './tokens'
import { defaultColors, vibrantColors, type ColorPalette } from './colors'

export type ThemeMode = 'light' | 'dark'

export type AppTheme = {
  mode: ThemeMode
  tokens: typeof tokens
  colors: ColorPalette
}

export const createTheme = (mode: ThemeMode): AppTheme => ({
  mode,
  tokens,
  colors: mode === 'light' ? defaultColors : vibrantColors,
})

// Export per uso diretto
export { tokens, defaultColors, vibrantColors }
export type { ColorPalette }
