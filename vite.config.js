import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const DEFAULT_SITE_URL = 'https://genyxz-osnutek-spletna-stran.netlify.app'

function getSiteUrl() {
  const rawSiteUrl = process.env.VITE_SITE_URL || process.env.DEPLOY_PRIME_URL || process.env.URL || DEFAULT_SITE_URL

  return rawSiteUrl.replace(/\/+$/, '')
}

function injectSiteUrlPlugin() {
  return {
    name: 'inject-site-url',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', getSiteUrl())
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), injectSiteUrlPlugin()],
})
