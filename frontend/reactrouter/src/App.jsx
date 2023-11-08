import './App.css';
 

//reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

//navegando entre paginas

import Footer from './components/Footer';

function App() {

  return (
    <>
    
      <Outlet /> 
      <Footer></Footer>
    </>
  )
}

export default App
