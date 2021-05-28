import { defineConfig } from 'vite'
import linaria from 'vite-plugin-linaria'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [
    linaria(),
    reactRefresh(),
  ]
})
