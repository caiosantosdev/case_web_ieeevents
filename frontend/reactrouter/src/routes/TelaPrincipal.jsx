import React from 'react'
import{ Link } from "react-router-dom";
import icone from '../assets/imagens/icone.png';
import calendario from '../assets/imagens/calendar-time.svg'
import perfil from '../assets/imagens/Perfil.svg'
import{ useState} from "react";
import "../styles/principal.css"

// import { Swiper, SwiperSlide } from 'swiper/react'


// import { Navigation, Pagination } from 'swiper'
// import evento1 from '../assets/imagens/evento1.jpg'
// import evento2 from '../assets/imagens/evento2.jpg'
// import evento3 from '../assets/imagens/evento3.png'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

const TelaPrincipal = () => {
  // const slides = [evento1, evento2, evento3];
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
            <main>
              <div className="destaque">
                <h1>Eventos em Destaque</h1>
                <h2>Os melhores eventos e benefícios para você</h2>
                {/* <Swiper>
                  {slides.map(slide => (
                    <SwiperSlide>
                      <img src={slide} alt={slides} />
                    </SwiperSlide>  
                  ))}
                </Swiper> */}
                
              </div>
            </main>
    </div>
  )
}

export default TelaPrincipal