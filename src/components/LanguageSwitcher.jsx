// src/components/LanguageSwitcher.jsx
import { useLingui } from '@lingui/react/macro'
import { locales, localeDisplayName, loadCatalog, saveLocale } from '../i18n'

export function LanguageSwitcher() {
  const { i18n, t } = useLingui()

  async function switchLocale(newLocale) {
    await loadCatalog(newLocale)
    saveLocale(newLocale)
  }

  return (
    <select
      value={i18n.locale}
      onChange={(e) => switchLocale(e.target.value)}
      aria-label={t({ message: `Language`, comment: 'Accessible name of the language switcher' })}
      className="language-switcher"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeDisplayName(loc)}
        </option>
      ))}
    </select>
  )
}
