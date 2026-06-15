import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import * as styles from './Detalhesprodutos.module.css'

export default function Detalhesprodutos() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [produto, setProduto] = useState(null)
  const [titulo, setTitulo] = useState('')
  const [preco, setPreco] = useState('')


  useEffect(() => {
  api.get(`/products/${id}`)
    .then((resposta) => {
      setProduto(resposta.data)
      setTitulo(resposta.data.title)
      setPreco(resposta.data.price)
    })
    .catch(() => console.log('Erro ao buscar produto'))
}, [id])

function handleDeletar() {
  api.delete(`/products/${id}`)
    .then(() => navigate('/produtos'))
}

function handleEditar(e) {
  e.preventDefault()
  api.put(`/products/${id}`, { title: titulo, price: preco })
    .then((resposta) => {
      setProduto(resposta.data)
      alert('Produto atualizado!')
    })
}


  return (
   <div className={styles.pagina}>
  <button onClick={() => navigate('/produtos')} className={styles.voltar}>
    ← Voltar
  </button>

  {produto && (
    <>
      <img src={produto.thumbnail} alt={produto.title} className={styles.imagem} />
      <h1 className={styles.titulo}>{produto.title}</h1>
      <p className={styles.preco}>R$ {produto.price}</p>
      <p className={styles.descricao}>{produto.description}</p>

      <button onClick={handleDeletar} className={styles.btnDeletar}>
        Deletar produto
      </button>

      <form onSubmit={handleEditar} className={styles.form}>
        <h2>Editar produto</h2>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
        />
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="Preço"
        />
        <button type="submit">Salvar</button>
      </form>
    </>
  )}
</div>

  )
}
