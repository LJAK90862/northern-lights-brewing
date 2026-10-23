// src/i18n/format.js
import { useMemo } from 'react'
import { useLingui } from '@lingui/react'
import { DEFAULT_CURRENCY, DATE_PRESETS } from './locales'

export const UNITS = [
  ['second', 1000],
  ['minute', 60_000],
  ['hour', 3_600_000],
  ['day', 86_400_000],
  ['week', 604_800_000],
  ['month', 2_629_746_000],
  ['year', 31_556_952_000],
]

/** Largest unit whose magnitude is at least 1; falls back to seconds. */
export function pickRelativeUnit(deltaMs) {
  const abs = Math.abs(deltaMs)
  for (let i = UNITS.length - 1; i >= 0; i--) {
    const [unit, ms] = UNITS[i]
    if (abs >= ms || i === 0) return [unit, Math.round(deltaMs / ms)]
  }
  return ['second', 0]
}

/**
 * THE SEAM. Formatting follows the UI locale today. To give this project a
 * separate regional preference — an English UI that still renders 1.234,56 € —
 * change this one function. Every formatter reads its locale from here.
 */
export function formatLocale(uiLocale) {
  return uiLocale
}

/** Intl instances keyed by locale + kind. Holds no request state, so it is safe under SSR. */
const memo = new Map()
function cached(key, make) {
  let f = memo.get(key)
  if (f === undefined) memo.set(key, (f = make()))
  return f
}

const toDate = (v) => (v instanceof Date ? v : new Date(v))

export function createFormatters(uiLocale) {
  const locale = formatLocale(uiLocale)
  const nf = (key, opts) =>
    cached(`n:${locale}:${key}`, () => new Intl.NumberFormat(locale, opts))
  const df = (key, opts) =>
    cached(`d:${locale}:${key}`, () => new Intl.DateTimeFormat(locale, opts))

  return {
    money: (amount, currency = DEFAULT_CURRENCY) =>
      nf(`cur:${currency}`, { style: 'currency', currency }).format(amount),
    number: (value, opts) =>
      opts
        ? new Intl.NumberFormat(locale, opts).format(value)
        : nf('dec', { style: 'decimal' }).format(value),
    percent: (value) => nf('pct', { style: 'percent' }).format(value),
    compact: (value) => nf('cmp', { notation: 'compact' }).format(value),
    unit: (value, unit) => nf(`unit:${unit}`, { style: 'unit', unit }).format(value),
    date: (value, preset = 'medium') =>
      df(`p:${preset}`, DATE_PRESETS[preset]).format(toDate(value)),
    time: (value) => df('t', { timeStyle: 'short' }).format(toDate(value)),
    dateTime: (value) =>
      df('dt', { dateStyle: 'medium', timeStyle: 'short' }).format(toDate(value)),
    relativeTime: (value, now) => {
      const from = now === undefined ? Date.now() : toDate(now).getTime()
      const [unit, amount] = pickRelativeUnit(toDate(value).getTime() - from)
      return cached(`r:${locale}`, () =>
        new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }),
      ).format(amount, unit)
    },
    list: (items, type = 'and') =>
      cached(`l:${locale}:${type}`, () =>
        new Intl.ListFormat(locale, {
          style: 'long',
          type: type === 'or' ? 'disjunction' : 'conjunction',
        }),
      ).format(items),
  }
}

/** In components. Reads the locale from context, so it re-renders on locale change. */
export function useFormatters() {
  const { i18n } = useLingui()
  return useMemo(() => createFormatters(i18n.locale), [i18n.locale])
}

/** In loaders, server code, route handlers and tests — anywhere there is no React context. */
export const getFormatters = createFormatters
