import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NotesApp from './components/pages/NotesApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesApp />
  </StrictMode>,
)
