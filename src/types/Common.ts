export type LanguageT = 'en' | 'fr'

export type LanguageContextT = {
  lang: LanguageT
  changeLanguage: (lang: LanguageT) => void
}

export type LayoutT = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export type LayoutContextT = {
  layout: LayoutT
  openDrawer: boolean
  onSetOpenDrawer: () => void
}

export type AxiosOption = {
  url: string
  method: 'post' | 'get'
  data?: unknown
  bearerToken?: string
}
