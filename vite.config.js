import react from '@vitejs/plugin-react'
import { lingui } from '@lingui/vite-plugin'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [require.resolve('@lingui/babel-plugin-lingui-macro')],
      },
    }),
    lingui(),
  ],
})
