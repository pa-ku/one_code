import { createContext, useContext, useState } from 'react'
export const ThemeContext = createContext({} as ThemeContextType)

type ThemeContextType = {
  themeColors: {
    accent: string
    functions: string
  }
  setThemeColors: (value: { accent: string; functions: string }) => void
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext debe estar dentro de un provider')
  }
  return context
}

export function ThemeProvider({ children }) {
  const [themeColors, setThemeColors] = useState({
    accent: '',
    functions: '',
  })
  return (
    <ThemeContext.Provider value={{ themeColors, setThemeColors }}>
      {children}
    </ThemeContext.Provider>
  )
}
