import { useNavigate } from 'react-router-dom'
import * as styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.pagina}>
      <h1>Bem-vindo à Loja</h1>
      <p>Encontre os melhores produtos com os melhores preços.</p>
      <button onClick={() => navigate('/produtos')} className={styles.btn}>
        Ver Produtos
      </button>
    </div>
  )
}
