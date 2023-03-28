export type LanguageT = 'en' | 'fr'

export type LanguageContextT = {
  lang: LanguageT
  changeLanguage: (lang: LanguageT) => void
}

export type LayoutT = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export type LayoutContextT = {
  layout: LayoutT
}
