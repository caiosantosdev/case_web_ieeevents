import { Link } from "react-router-dom"
import insta from "../assets/imagens/instagramicon.png"
import face from "../assets/imagens/facebookicon.png"
import twitter from "../assets/imagens/twitter.png"
import '../styles/footer.css'

const Footer = () => {
  return (
    <nav className="footer">
        <div id="footerHtml" className="footer__conteudo">
            <div className="footer__links">
                <Link to="/" className="link">Início</Link>
                <Link to="/" className="link">Termos e Políticas</Link>
            </div>
            <div className="footer__midias">
                <Link to="https://www.instagram.com/ieeecefet/" target="_blank" >
                        <img src={insta} alt="Ícone Instagram" className="icone"/>
                </Link>
                <Link to="https://www.facebook.com/ieeecefetrj/" target="_blank">
                    <img src={face} alt="Ícone Facebook" className="icone"/>
                </Link>
                <Link to="https://twitter.com/cefet_rj" target="_blank">
                    <img src={twitter} alt="Ícone Twitter" className="icone"/>
                </Link>
            </div>
                
            
            
               
           
        </div>
    </nav>
  )
}

export default Footer
