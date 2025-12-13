import React, { createContext, useState, useContext, useEffect } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import { createTheme, type ThemeMode, type AppTheme } from './index'
import { GlobalStyles } from './globalStyles'

type ThemeMode = 'light' | 'dark'

type ThemeContextType = {
  mode: ThemeMode
  toggleTheme: () => void
  theme: AppTheme
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// const ThemeContext = createContext<ThemeContextType>({
//   mode: 'light',
//   toggleTheme: () => {},
// })

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme deve essere usato all'interno di ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Inizializza da localStorage se disponibile
    const saved = localStorage.getItem('theme') as ThemeMode | null
    return saved === 'dark' ? 'dark' : 'light'
  })
  const theme = createTheme(mode)

  useEffect(() => {
    const root = document.documentElement

    // Imposta CSS variables per i colori
    Object.entries(theme.colors).forEach(([key, value]) => {
      // Converti camelCase a kebab-case: mainBg -> main-bg
      const cssVarName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
      root.style.setProperty(cssVarName, value)
    })

    // Imposta data attribute per selettori CSS
    document.body.dataset.theme = mode

    // Persisti preferenza
    localStorage.setItem('theme', mode)
  }, [mode, theme.colors])

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // const theme = {
  //   ...base,
  //   colors: mode === 'light' ? light : dark,
  //   mode,
  // }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      <StyledProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )
}
