import * as styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <div className={styles.pagina}>
      <h1>Sobre</h1>
      <p>Todos os produtos pensado com muito carinho para você!.</p>
      <p>Melhores Produtos <strong>Melhores Preços</strong> Com a melhor qualidade.</p>

      <div className={styles.card}>
        <h2>Produtos de Primeira Linha</h2>
        <ul>
          <li>Qualidade em primeiro Lugar </li>
          <li>Testato e aprovado</li>
          <li>Hipoalergeninos</li>
          <li>Melhor custo beneficio</li>
          <li>Você e sua familia merecem o melhor</li>
        </ul>
      </div>
    </div>
  )
}
