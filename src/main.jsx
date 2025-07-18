import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { 
  registerServiceWorker, 
  showInstallPrompt, 
  checkOnlineStatus,
  requestNotificationPermission 
} from './lib/pwa.js'

// Initialize PWA features
registerServiceWorker()
showInstallPrompt()
checkOnlineStatus()

// Request notification permission after user interaction
document.addEventListener('click', () => {
  requestNotificationPermission()
}, { once: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
