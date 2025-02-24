import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BaseProvider } from '@/providers/baseProvider'
import { Router } from '@/router/Route'
import '@/reset.css'
import '@/index.css'
import '@/variables.css'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <BaseProvider>
      <Router />
    </BaseProvider>
  </StrictMode>,
)
