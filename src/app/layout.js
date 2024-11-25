'use client'

import { createContext, useContext } from 'react'
import './globals.css'
import { TodoProvider } from '@/contexts/TodoContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Providers } from '@/contexts'

const themes = {
  light: {
    background: 'bg-white',
    text: 'text-black',
    btn: 'bg-gray-800',
    input: 'bg-gray-800',
    white: 'white',
    black: 'gray-800',
  },
  dark: {
    background: 'bg-gray-800',
    text: 'text-white',
    btn: 'bg-gray-200',
  },
}

export const ThemeContext = createContext(themes.light)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
