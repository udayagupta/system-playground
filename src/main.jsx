import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SettingsProvider } from './context/SettingsContext.jsx'
import { CharactersProvider } from './context/CharactersContext.jsx'
import { NotificationsProvider } from './context/NotificationsContext.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
import { createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: 
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <NotificationsProvider>
        <CharactersProvider>
          <PlayerProvider>
            <App />
          </PlayerProvider>
        </CharactersProvider>
      </NotificationsProvider>
    </SettingsProvider>
  </StrictMode>,
)
