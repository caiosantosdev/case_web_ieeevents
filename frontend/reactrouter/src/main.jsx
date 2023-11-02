import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//configurando router
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

import TelaEntrada from './routes/TelaEntrada.jsx';
import TelaPrincipal from './routes/TelaPRincipal.jsx';
import Perfil from './routes/perfil.jsx';
import PaginaDoEvento from './routes/PaginaDoEvento.jsx';
import MeusEventos from './routes/Meuseventos.jsx';
import Login from './routes/login.jsx';
import CriacaoEdicaoEvento from './routes/CriacaoEdicaoEvento.jsx';
import Cadastro from './routes/cadastro.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaEntrada />,
  },
  {
    path: "principal",
    element: <TelaPrincipal />,
  },
  {
    path: "perfil",
    element: <Perfil />,
  },
  {
    path: "evento",
    element: <PaginaDoEvento />,
  },
  {
    path: "meus-eventos",
    element: <MeusEventos />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "criacao-edicao",
    element: <CriacaoEdicaoEvento />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
