import React from "react";
import { Link } from "react-router-dom";
import icone from "../assets/imagens/icone.png";
import "../styles/telaentrada.css";

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
          <Link to="/login">Entrar</Link>
        </div>
      </nav>

      <div className="container">
        <div className="wrap">
          <div className="desc1">
            <span className="span1"> Descubra o próximo </span>
            <span className="span1" id="gradiente">
              {" "}
              grande evento{" "}
            </span>
            <span className="span1"> da sua cidade aqui </span>
          </div>
        </div>
        <div className="desc2">
          <span className="span2">
            {" "}
            Onde as histórias se encontram e os momentos se tornam{" "}
          </span>
          <span className="span2" id="gradiente">
            {" "}
            extraordinários{" "}
          </span>
        </div>

        <div className="desc3">
          <span className="span3">
            {" "}
            Se aventure e deixe sua marca no mundo.
          </span>
        </div>

        <div className="desc4">
          <span className="span4"> Faça login para começar essa jornada </span>
          <span className="span4" id="gradiente">
            {" "}
            inesquecível!{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TelaEntrada;
