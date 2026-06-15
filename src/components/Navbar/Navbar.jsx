
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../../contexts/AppContext'
import * as styles from './Navbar.module.css'

export default function Navbar() {
  const { darkMode, toggleDarkMode, usuarioLogado, logout } = useApp()
  const navigate = useNavigate()

  return (

    <nav className={styles.navbar}>
  <div className={styles.links}>
    <Link to="/">Home</Link>
    <Link to="/produtos">Produtos</Link>
    <Link to="/sobre">Sobre</Link>
  </div>

  <div className={styles.acoes}>
    <button onClick={toggleDarkMode}>
      {darkMode ? '☀️ Claro' : '🌙 Escuro'}
    </button>

    {usuarioLogado && (
      <button onClick={() => { logout(); navigate('/login') }}>
        Sair
      </button>
    )}
  </div>
</nav>

    
  )
}


