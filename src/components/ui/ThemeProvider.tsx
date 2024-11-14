'use client'

import { ThemeProvider } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ClientThemeProvider = ({ children }: ThemeProviderProps) => { 
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}