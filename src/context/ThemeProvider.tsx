"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ThemeContext } from "./theme-context"

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  // Apply theme class to document body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode-variables")
    } else {
      document.body.classList.remove("dark-mode-variables")
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

