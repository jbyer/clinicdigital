import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { GoogleAnalytics } from '@/components/google-analytics'
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/google-tag-manager'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'ClinicDigital.co | Bring More Patients to Your Practice',
  description: 'ClinicDigital is a medical practice marketing agency helping clinics and med spas attract more patients with AI-powered SEO, automation, and lead generation.',
  keywords: ["AI Solutions", "AI solutions for healthcare practices"]
}

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <GoogleTagManager />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
