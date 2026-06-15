import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../contexts/AppContext'


export default function Login() {

  const navigate = useNavigate()
  const {login} = useApp()


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");


  

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }


    if (senha.length < 4) {
      setErro("Senha dever ter pelo menos 4 caracteres");
      return;
    }

    setErro("");
   try {
  const resposta = await api.post("/auth/login", {
    username: email,
    password: senha,
    expiresInMins: 30,
  });
  login(resposta.data)   // salva o usuário no Context
  navigate('/')          // redireciona para a Home
} catch (error) {
  setErro("Usuário ou senha incorretos");
}
  }

  return (
    <form onSubmit={handleLogin} autoComplete="off">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {erro && <p>{erro}</p>}

      <button>Entrar</button>
    </form>
  );
}
