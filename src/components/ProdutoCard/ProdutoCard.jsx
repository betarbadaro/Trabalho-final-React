import { Link } from 'react-router-dom'
import * as styles from './ProdutoCard.module.css'

export default function ProdutoCard({ produto }) {
  return (
    <div className={styles.card}>
      <img src={produto.thumbnail} alt={produto.title} />
      <h3>{produto.title}</h3>
      <p>R$ {produto.price}</p>
      <p className={styles.categoria}>{produto.category}</p>
      <Link to={`/produtos/${produto.id}`}>
        <button className={styles.btn}>Ver detalhes</button>
      </Link>
    </div>
  )
}
