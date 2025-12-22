import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SettingsProvider } from './context/SettingsContext.jsx'
import { CharactersProvider } from './context/CharactersContext.jsx'
import { NotificationsProvider } from './context/NotificationsContext.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import Layout from './Layout.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout />
//     ),
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <NotificationsProvider>
        <CharactersProvider>
          <PlayerProvider>
            <App />
            {/* <RouterProvider router={router}/> */}
          </PlayerProvider>
        </CharactersProvider>
      </NotificationsProvider>
    </SettingsProvider>
  </StrictMode>,
)
