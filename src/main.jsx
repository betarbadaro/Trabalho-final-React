import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './contexts/AppContext'
import './global.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
</StrictMode>

)
