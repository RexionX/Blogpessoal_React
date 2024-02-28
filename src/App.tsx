import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';

import Perfil from './paginas/perfil/Perfil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
 
    return (
      <>
        <AuthProvider>
        <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Cadastro/>} />
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastroTema" element={<FormularioTema />} />
          <Route path="/editarTema/:id" element={<FormularioTema />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
          
          </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
        </AuthProvider>
      
      </>
    )
    
}

export default App;
