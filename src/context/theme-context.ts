"use client"

import { createContext, useContext } from "react"

export type ThemeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

