'use client'

import { createContext, useContext } from 'react'
import './globals.css'
import { Providers } from '@/contexts'
import { Provider } from '@/components/ui/provider'
import { ThemeProvider } from '@mui/material'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
