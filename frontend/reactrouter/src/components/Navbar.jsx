import { Link } from "react-router-dom"
import './nav.css'

const Navbar = () => {
  return (
    <nav className="navegacao">
        <Link to="/">Tela Entrada</Link>
        <Link to="/principal">Tela Principal</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/evento">Pagina Do Evento</Link>
        <Link to="/meus-eventos">Meus Eventos</Link>
        <Link to="/login">Login</Link>
        <Link to="/criacao-edicao">Criação/Edição de Evento</Link>
        <Link to="/cadastro">Cadastro</Link>
    </nav>
  )
}

export default Navbar