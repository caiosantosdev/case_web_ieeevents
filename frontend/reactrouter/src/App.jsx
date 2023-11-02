import './App.css';

//reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

//navegando entre paginas
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h1>Rotas</h1>  
      <Outlet /> 
      <p>Footer</p>
    </>
  )
}

export default App
