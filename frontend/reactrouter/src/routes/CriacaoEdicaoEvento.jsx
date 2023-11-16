import React from 'react'
import{ Link } from "react-router-dom";
import icone from '../assets/imagens/icone.png';
import calendario from '../assets/imagens/calendar-time.svg'
import perfil from '../assets/imagens/Perfil.svg'
import wolfieee from '../assets/imagens/eventoHalloween.jpg';



import "../styles/criacao.css"
 
 const CriacaoEdicaoEvento = () => {
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
                    <Link to="/meus-eventos" className='test'>
                        <img src={calendario} alt="Logo" className="calendario"/>
                        <p className='header_linkp' >Meus eventos</p>
                    </Link>
                    
                  </div>
                  <div className='nav__meuperfil'>
                  <Link to="/perfil" className='test'>
                        <img src={perfil} alt="Logo" className="perfil"/>
                        <p className='header_linkp' >Meu perfil</p>
                    </Link>
                  </div>
                </div>
            </nav>

            <main id='main' >

<div id='sectionOne'> 
        

    <section id='detalhesEvento'>

    <h1 id='nomeDoEvento'><b>Nome do Evento:</b></h1>
        <textarea id="nomeTextarea" placeholder="Nome do evento..."></textarea>

        <p>Local:</p>
        
          <textarea id="eventoTextarea" placeholder="Nome do local..."></textarea>

        <p>Endereço:</p>
          <textarea id="eventoTextarea" placeholder="Endereço do local..."></textarea>

        <p>Data e Horário:</p>
          <textarea id="eventoTextarea" placeholder="Coloque a data e hora..."></textarea>

        <p>Assunto:</p>
          <textarea id="eventoTextarea" placeholder="Digite o assunto..."></textarea>

        <p>Categoria: (opcional)</p>
          <textarea id="eventoTextarea" placeholder="Nome da Categoria..."></textarea>
      </section>


          <img id="fotoWolf" src={wolfieee} alt="fotoEvento" />

</div>


<div id='sectionTwo' >
  <p id='description' >Descrição do Evento:</p>

  <textarea id="descriptionTextarea" placeholder="Detalhes informados pelo criador do evento."></textarea>
  {/* <p id="questions" >Preciso confirmar minha participação?</p> */}
  </div>
  
   <div id='sectionThree'>
      <p id="question1" >Preciso confirmar minha participação?</p>
      <p>Não, uma vez clicado no botão “Participar” sua presença está confirmada.</p> 

      <p id="question2" >Quais são os ingressos disponíveis e quanto custam?</p>
      <p>Os ingressos disponíveis para o evento são 100% gratuitos e acessíveis para todos os públicos.</p>

      <p id="question3" >Haverá itens de consumo para comprar?</p>
      <p>Sim, terão foodtrucks e estabelecimentos de nossos patrocinadores.</p>

      <div className="container-register-formulario-btn">
                        <Link className="textoOne" to='/'>
                            <button id="voltando" className='voltar-formulario-btn' >Voltar
                            </button>
                        </Link>
                        <Link className="textoTwo" to='/'>
                            <button id="cadastrando" className='register-formulario-btn' type="submit">Criar Evento</button>
                        </Link>
            
                    </div>



  </div> 
   
 


 </main>







</div>
   )
 }
 
 export default CriacaoEdicaoEvento