import React from "react";
import { Link } from "react-router-dom";
import icone from "../assets/imagens/icone.png";
import "../styles/telaentrada.css";
import mike from "../assets/imagens/mike.png";
import wolf from "../assets/imagens/wolfieee.png"
import avaliacao from "../assets/imagens/avaliacao.png"

const TelaEntrada = () => {
  return (
    <div>
      <nav className="navegacao1">
        <Link to="/">
          <img src={icone} alt="Logo" className="icone_p" />
        </Link>

        <div className="links__entrada">
          <Link to="/cadastro" className="cadastre_se">
            Cadastre-se
          </Link>
          <Link to="/login" className="entrar">Entrar</Link>
        </div>
      </nav>

      <div className="container">
      
            
          <div className="desc1">
            <img src={mike} alt = "imagem" className="imagem1"/>
            <p>Descubra o próximo <span id="gradiente">grande evento</span> da sua cidade aqui</p>
            
          </div>
        
        <div className="desc2">
          
          <p>Onde as histórias se encontram e os momentos se tornam <span id ="gradiente">extraordinários</span> </p>
          <img src={avaliacao} alt = "imagem" className="imagem1"/>
            
        </div>

        <div className="desc3">
          <p>Se aventure e deixe sua marca no mundo. <br />
            Faça login para começar essa jornada <span id="gradiente">inesquecível!</span> </p>
          
        </div>


        <div className="container-btn">
          <Link to='/cadastro' className="tst1">
              <button className='register-btn' type="submit">Cadastre-se</button>
          </Link>
      
          <Link to='/login'>
            <button className='login-btn' type="submit">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TelaEntrada;
