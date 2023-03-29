import React, { useContext, useState } from 'react'
import { Stack } from '@mui/material'
import ENFlag from '@/i18n/flags/en.svg'
import ENFlagFaded from '@/i18n/flags/en-faded.svg'
import FRFlag from '@/i18n/flags/fr.svg'
import FRFlagFaded from '@/i18n/flags/fr-faded.svg'
import { LanguageContext } from '@/contexts/i18n'
import { LanguageT } from '@/types/Common'
import styles from './controllers.module.css'

const LanguageSwitcher = () => {
  const { lang, changeLanguage } = useContext(LanguageContext)
  const [locale, setLocale] = useState<LanguageT>(lang)

  const onSwitchLanguage = (lang: LanguageT) => {
    localStorage.setItem('lang', lang)
    changeLanguage(lang)
    setLocale(lang)
  }

  return (
    <Stack spacing={2} direction="row">
      {locale === 'en' ? (
        <>
          <span
            className={styles.flag}
            onClick={() => onSwitchLanguage('en')}
            onKeyDown={() => onSwitchLanguage('en')}
            role="button"
            tabIndex={0}
          >
            <ENFlag role="img" aria-label="Flag of England" />
          </span>
          <span
            className={styles.flag}
            onClick={() => onSwitchLanguage('fr')}
            onKeyDown={() => onSwitchLanguage('fr')}
            role="button"
            tabIndex={0}
          >
            <FRFlagFaded role="img" aria-label="Flag of France" />
          </span>
        </>
      ) : (
        <>
          <span
            className={styles.flag}
            onClick={() => onSwitchLanguage('en')}
            onKeyDown={() => onSwitchLanguage('en')}
            role="button"
            tabIndex={0}
          >
            <ENFlagFaded role="img" aria-label="Flag of England" />
          </span>
          <span
            className={styles.flag}
            onClick={() => onSwitchLanguage('fr')}
            onKeyDown={() => onSwitchLanguage('fr')}
            role="button"
            tabIndex={0}
          >
            <FRFlag role="img" aria-label="Flag of France" />
          </span>
        </>
      )}
    </Stack>
  )
}

export default LanguageSwitcher
