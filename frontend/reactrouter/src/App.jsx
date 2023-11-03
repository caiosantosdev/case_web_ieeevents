import './App.css';


//reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

//navegando entre paginas
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>  
      <Outlet /> 
      <Footer></Footer>
    </>
  )
}

export default App
