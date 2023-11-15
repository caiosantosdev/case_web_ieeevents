 import React from 'react'
 import{ Link } from "react-router-dom";
 import icone from '../assets/imagens/icone.png';
 import calendario from '../assets/imagens/calendar-time.svg'
 import perfil from '../assets/imagens/Perfil.svg'
 import{ useState} from "react";
 import user from '../assets/imagens/User.svg'
 import lixo from '../assets/imagens/Remove.svg'

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
              <div className='container__perfil'>
                <img src={user} className='icone-user' />
                <p className='parag'>Olá, usuário!</p>
                <div className='nome-sobre'>
                  <div className="nome">
                    <p className='parag'>Nome:</p>
                    <input type="text" placeholder='Meu nome' className='campo-perfil' id="inputp"/>
                  </div>
                  
                  <div className="sobrenome">
                    <p className='parag'>Sobrenome:</p>
                    <input type="text" placeholder='Meu sobrenome' className='campo-perfil' id="inputp"/>
                  </div>
                </div>
                
                <div className="telefone-CPF">
                  <div className='telefone'>
                    <p className='parag'>Telefone:</p>
                    <input type="text" placeholder='Meu telefone' className='campo-perfil' id="inputp"/>
                  </div>
                  
                  <div className="cpf">
                    <p className='parag'>CPF:</p>
                    <input type="text" placeholder='Meu CPF' className='campo-perfil1' id="inputp" readOnly/>
                  </div>
                </div>

                <div className='alone-input'>
                  <p className='parag'>E-mail:</p>
                  <input type="text" placeholder='Meu e-mail' className='campo-perfil' id="inputp"/>
                </div>

                <div className='alone-input'>
                  <p className='parag'>Endereço:</p>
                  <input type="text" placeholder='Meu endereço' className='campo-perfil' id="inputp"/>
                </div>

                <Link className='deletar'>
                <img src={lixo} className='lixeira' />
                <p>Deletar Conta Permanentemente</p>
                </Link>

                <div className='botoes'>
                  <Link>
                    <button className='botao'>Descartar</button>
                  </Link>
                  <Link>
                    <button className='botao' id='salvar'>Salvar Mudanças</button>
                  </Link>
                </div>
              </div>      
            </main>
        
     </div>
   )
 }
 
 export default Perfil