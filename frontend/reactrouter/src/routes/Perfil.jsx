 import React from 'react'
 import{ Link } from "react-router-dom";
 import icone from '../assets/imagens/icone.png';
 import calendario from '../assets/imagens/calendar-time.svg'
 import perfil from '../assets/imagens/Perfil.svg'
 import fundop from '../assets/imagens/IEEEfundopreto.png';

 import "../styles/perfil.css"
 
 const Perfil = () => {
   return (
     <div>
      <nav className="navegacao_p">
                <div className='container__pesquisa'>
                  <Link to="/">
                      <img src={icone} alt="Logo" className="icone_p"/>
                  </Link>
                  <input type="search" placeholder="Pesquise eventos" className="cabecalho__pesquisa"></input>
                </div>
                <div className="nav_direita">
                  <div className='nav__eventos'>
                    <Link to="/meus-eventos">
                        <img src={calendario} alt="Logo" className="calendario"/>
                        <p className='header_linkp' >Meus eventos</p>
                    </Link>
                    
                  </div>
                  <div className='nav__meuperfil'>
                  <Link to="/perfil">
                        <img src={perfil} alt="Logo" className="perfil"/>
                        <p className='header_linkp' >Meu perfil</p>
                    </Link>
                  </div>
                </div>
            </nav>
            <main className='conteudo'>
              <h1>Perfil</h1>   
            </main>
        
     </div>
   )
 }
 
 export default Perfil