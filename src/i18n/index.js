// src/i18n/index.js
import { i18n } from '@lingui/core'
import { detect, fromUrl, fromStorage, fromNavigator } from '@lingui/detect-locale'
import { getDirection, resolveLocale, sourceLocale } from './locales'

// Re-export the locale module so consumers need one import.
export * from './locales'

export function detectLocale() {
  return resolveLocale(detect(fromUrl('lang'), fromStorage('lang'), fromNavigator()))
}

export async function loadCatalog(locale) {
  try {
    const { messages } = await import(`../locales/${locale}/messages.mjs`)
    i18n.loadAndActivate({ locale, messages })
  } catch (e) {
    console.error(`Failed to load "${locale}" catalog, falling back to "${sourceLocale}"`, e)
    const { messages } = await import(`../locales/${sourceLocale}/messages.mjs`)
    i18n.loadAndActivate({ locale: sourceLocale, messages })
  }
  document.documentElement.lang = i18n.locale
  document.documentElement.dir = getDirection(i18n.locale)
}

export function saveLocale(locale) {
  localStorage.setItem('lang', locale)
  // `detectLocale()` reads `?lang=` *before* localStorage, so the URL has to be updated too.
  // Writing only storage would let a stale `?lang=` from a shared link win on the next reload.
  const url = new URL(window.location.href)
  url.searchParams.set('lang', locale)
  history.replaceState(history.state, '', url)
}

export { i18n }
