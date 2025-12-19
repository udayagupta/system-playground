import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SettingsProvider } from './context/SettingsContext.jsx'
import { CharactersProvider } from './context/CharactersContext.jsx'
import { NotificationsProvider } from './context/NotificationsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <CharactersProvider>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </CharactersProvider>
    </SettingsProvider>
  </StrictMode>,
)
