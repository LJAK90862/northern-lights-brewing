// lingui.config.js
import { defineConfig } from '@lingui/cli'
import { formatter } from '@lingui/format-po'
import { sourceLocale, locales } from './src/i18n/locales'

export default defineConfig({
  sourceLocale,
  locales: [...locales],
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**', '**/locales/**'],
    },
  ],
  format: formatter(),
  compileNamespace: 'es',
  macro: {
    jsxPlaceholderAttribute: '_t',
  },
})
