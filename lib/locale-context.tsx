'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Locale = 'en' | 'es'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const translations: Record<Locale, Record<string, any>> = {
  en: {
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.caseStudies': 'Case Studies',
    'nav.getFreeAudit': 'Get Free Audit',
    'nav.bookACall': 'Book A Call',
    'nav.acquisitionEngine': 'Acquisition Engine',
    'nav.frontDeskAutopilot': 'Front Desk Autopilot',
    'nav.lifetimeValueSystem': 'Lifetime Value System',
    'nav.otherServices': 'Other Services',
    'footer.solutions': 'Solutions',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'language': 'Language',
    'english': 'English',
    'spanish': 'Español',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.solutions': 'Soluciones',
    'nav.caseStudies': 'Casos de Éxito',
    'nav.getFreeAudit': 'Obtener Auditoría Gratuita',
    'nav.bookACall': 'Agendar Llamada',
    'nav.acquisitionEngine': 'Motor de Adquisición',
    'nav.frontDeskAutopilot': 'Automatización de Recepción',
    'nav.lifetimeValueSystem': 'Sistema de Valor Vitalicio',
    'nav.otherServices': 'Otros Servicios',
    'footer.solutions': 'Soluciones',
    'footer.company': 'Empresa',
    'footer.resources': 'Recursos',
    'language': 'Idioma',
    'english': 'English',
    'spanish': 'Español',
  },
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLocale = (localStorage.getItem('locale') as Locale) || 'en'
    setLocaleState(savedLocale)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: string): string => {
    return translations[locale][key] || key
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
