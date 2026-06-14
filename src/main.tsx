import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CharacterApp from './CharacterApp.tsx'
import { FavoriteProvider } from './context/FavoriteProvider.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
         <FavoriteProvider>
            <CharacterApp />
          </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>,
)
