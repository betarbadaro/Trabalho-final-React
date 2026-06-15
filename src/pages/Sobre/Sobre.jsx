import * as styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <div className={styles.pagina}>
      <h1>Sobre</h1>
      <p>Esta aplicação foi desenvolvida como trabalho final da disciplina de React.</p>
      <p>Consome a API pública <strong>DummyJSON</strong> para listar e gerenciar produtos.</p>

      <div className={styles.card}>
        <h2>Tecnologias usadas</h2>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>Context API</li>
          <li>CSS Modules</li>
        </ul>
      </div>
    </div>
  )
}
