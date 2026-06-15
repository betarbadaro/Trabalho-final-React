import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter.jsx'
import { useApp } from './contexts/AppContext'

export default function App() {
  const { darkMode } = useApp()

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : 'light'}>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

