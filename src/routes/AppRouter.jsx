import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Produtos from '../pages/Produtos/Produtos'
import DetalhesProduto from '../pages/DetalhesProduto/Detalhesprodutos'
import Sobre from '../pages/Sobre/Sobre'
import Navbar from '../components/Navbar/Navbar'


 
 export default function AppRouter() {
   return (

        <>
        <Navbar />
        <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/:id" element={<DetalhesProduto />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
      </>
   
   )
 }
 