import { useState, useEffect } from "react";
import api from "../../services/api";
import ProdutoCard from "../../components/ProdutoCard/ProdutoCard";
import * as styles from "./Produtos.module.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    api
      .get("/products?limit=20")
      .then((resposta) => {
        setProdutos(resposta.data.products);
      })
      .catch(() => {
        console.log("Erro ao buscar produtos");
      });
  }, []);

  const produtosFiltrados = produtos.filter((p) =>
    p.title.toLowerCase().includes(busca.toLowerCase()),
  );

  return (

<div className={styles.pagina}>
  <h1>Produtos</h1>

  <input
    type="text"
    placeholder="Buscar produto..."
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
    className={styles.input}
  />

  <div className={styles.lista}>
    {produtosFiltrados.map((produto) => (
      <ProdutoCard key={produto.id} produto={produto} />
    ))}
  </div>
</div>



  );
}
