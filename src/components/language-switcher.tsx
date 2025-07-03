"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="relative w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
      >
        <Globe className="h-4 w-4 text-primary" />
      </Button>
    )
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 flex items-center justify-center"
      >
        <span className="text-sm">{localeFlags[currentLocale]}</span>
        <ChevronDown className="h-3 w-3 ml-1 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/20 z-50 overflow-hidden">
          <div className="py-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  onLocaleChange(locale)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left hover:bg-primary/10 transition-colors duration-200 flex items-center space-x-3 ${
                  currentLocale === locale ? 'bg-primary/20 text-primary' : 'text-foreground'
                }`}
              >
                <span className="text-lg">{localeFlags[locale]}</span>
                <span className="text-sm font-medium">{localeNames[locale]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 