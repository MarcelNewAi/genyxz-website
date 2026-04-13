import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initI18n } from './utils/i18n'

async function bootstrap() {
  try {
    await initI18n()
  } catch (error) {
    console.error('Failed to initialize i18n:', error)
    document.documentElement.lang = 'sl'
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

bootstrap()
