// src/i18n/locales.js
export const sourceLocale = 'en'
export const locales = ['en', 'de']

/**
 * Normalize an untrusted locale string: exact match, then the bare language (es-MX → es),
 * then a regional target of the same language (lv → lv-LV), then source.
 */
export function resolveLocale(raw) {
  if (!raw) return sourceLocale
  if (locales.includes(raw)) return raw
  const base = raw.split('-')[0]
  if (locales.includes(base)) return base
  return locales.find((l) => l.split('-')[0] === base) ?? sourceLocale
}

const RTL_LOCALES = new Set(['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'yi'])

/** Text direction for <html dir> and any direction-sensitive component. */
export function getDirection(locale) {
  return RTL_LOCALES.has(locale.split('-')[0]) ? 'rtl' : 'ltr'
}

const displayNames = new Map()

/**
 * A language's name. Defaults to its autonym — "Deutsch", not "German" — which is
 * what a language picker should show. Pass `displayIn` to name it in another locale.
 */
export function localeDisplayName(locale, displayIn = locale) {
  let dn = displayNames.get(displayIn)
  if (!dn) {
    dn = new Intl.DisplayNames([displayIn], { type: 'language' })
    displayNames.set(displayIn, dn)
  }
  return dn.of(locale) ?? locale
}

/** The project's currency. Formatting follows the locale; the currency follows the data. */
export const DEFAULT_CURRENCY = 'USD' // adjust to this project's currency

export const DATE_PRESETS = {
  short: { dateStyle: 'short' },
  medium: { dateStyle: 'medium' },
  long: { dateStyle: 'long' },
}
