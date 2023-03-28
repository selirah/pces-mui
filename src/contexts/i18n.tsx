import React, { useState, createContext, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import EN from '@/i18n/compiled/EN.json'
import FR from '@/i18n/compiled/FR.json'
import { LanguageT, LanguageContextT } from '@/types/Common'

const languages = {
  en: { ...EN },
  fr: { ...FR }
}

export const LanguageContext = createContext<LanguageContextT | null>(null)

type PropsT = {
  children: React.ReactNode
}

export const LanguageContextProvider: React.FC<PropsT> = ({ children }) => {
  const [lang, setLang] = useState<LanguageT>('en')
  const [messages, setMessages] = useState<Record<string, string>>(languages[lang])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const locale = localStorage.getItem('lang') as LanguageT
      if (locale) {
        setLang(locale)
        setMessages(languages[locale])
      } else {
        setLang('en')
        setMessages(languages['en'])
      }
    }
  }, [])

  const changeLanguage = (lang: LanguageT) => {
    setLang(lang)
    setMessages(languages[lang])
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      <IntlProvider key={lang} locale={lang} messages={messages} defaultLocale={lang}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}
