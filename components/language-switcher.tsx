'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<'en' | 'es'>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLocale = localStorage.getItem('locale') as 'en' | 'es' || 'en'
    setLocale(savedLocale)
  }, [])

  const handleLanguageChange = (newLocale: 'en' | 'es') => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
    // Just refresh the page to apply the language change
    window.location.reload()
  }

  if (!mounted) {
    return null
  }

  const labels = {
    en: 'English',
    es: 'Español',
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
          <Globe className="h-4 w-4" />
          <span>{labels[locale]}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en')}
          className={locale === 'en' ? 'bg-muted' : ''}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('es')}
          className={locale === 'es' ? 'bg-muted' : ''}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
