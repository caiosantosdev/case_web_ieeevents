import './App.css';

//reaproveitamento de estrutura
import { Outlet } from "react-router-dom";



function App() {

  return (
    <>
      <p>Header</p>
      <h1>Rotas</h1>  
      <Outlet /> 
      <p>Footer</p>
    </>
  )
}

export default App
