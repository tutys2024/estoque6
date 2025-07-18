// PWA utilities and service worker registration

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update notification
                showUpdateNotification()
              }
            })
          })
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

export const showUpdateNotification = () => {
  if (confirm('Nova versão disponível! Deseja atualizar?')) {
    window.location.reload()
  }
}

export const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission()
    return permission === 'granted'
  }
  return false
}

export const showNotification = (title, options = {}) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      ...options
    })
  }
}

export const isStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone ||
         document.referrer.includes('android-app://')
}

export const showInstallPrompt = () => {
  let deferredPrompt = null
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    
    // Show install button or banner
    const installButton = document.getElementById('install-button')
    if (installButton) {
      installButton.style.display = 'block'
      installButton.addEventListener('click', () => {
        deferredPrompt.prompt()
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt')
          }
          deferredPrompt = null
        })
      })
    }
  })
}

export const checkOnlineStatus = () => {
  const updateOnlineStatus = () => {
    const statusElement = document.getElementById('online-status')
    if (statusElement) {
      statusElement.textContent = navigator.onLine ? 'Online' : 'Offline'
      statusElement.className = navigator.onLine ? 'online' : 'offline'
    }
  }

  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
  updateOnlineStatus()
}

export const enableBackgroundSync = () => {
  if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
    navigator.serviceWorker.ready.then((registration) => {
      return registration.sync.register('background-sync')
    }).catch((error) => {
      console.log('Background sync registration failed:', error)
    })
  }
}

