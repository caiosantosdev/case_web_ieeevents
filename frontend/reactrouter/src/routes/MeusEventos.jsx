import React from 'react'
import{ Link } from "react-router-dom";
import icone from '../assets/imagens/icone.png';
import calendario from '../assets/imagens/calendar-time.svg'
import perfil from '../assets/imagens/Perfil.svg'
import{ useState, useEffect, useRef} from "react";
import "../styles/principal.css"
import {motion} from 'framer-motion'

import evento1 from '../assets/imagens/evento1.jpg'
import evento2 from '../assets/imagens/evento2.jpg'
import evento3 from '../assets/imagens/evento3.png'
import evento4 from '../assets/imagens/evento4.jpg'

const imagens = [evento1,evento2,evento3,evento4]
  


const MeusEventos = () => {
  const carrossel=useRef();
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])
  return (
    <div>
    
      <nav className="navegacao_pp">
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
            <main>
                

                <div className='secao2'>
                  <h2 >Eventos criados por mim</h2>
                  <div className="destaque">
                  
                    <motion.div ref={carrossel} className='carrossel' whileTap={{cursor: "grabbing"}}>
                        <motion.div
                        className='inner'
                        drag="x"
                        dragConstraints={{right: 0, left: -width}}
                        >
                              {imagens.map(evento=>(
                                <motion.div className='item' id="secundario" key={evento}>
                                  <img src={evento} alt = "Texto alt"/>
                                  </motion.div>
                              ))}
                        </motion.div>
                    </motion.div>
                    
                  </div>
                  <button className='criar-evento'>Criar novo Evento</button>
                </div>

                
                
                <div className='secao2'>
                  <h2>Ingressos ativos</h2>

                  <div className="destaque">
                  
                  <motion.div ref={carrossel} className='carrossel' whileTap={{cursor: "grabbing"}}>
                      <motion.div
                      className='inner'
                      drag="x"
                      dragConstraints={{right: 0, left: -width}}
                      >
                            {imagens.map(evento=>(
                              <motion.div className='item' id="secundario" key={evento}>
                                <img src={evento} alt = "Texto alt"/>
                                </motion.div>
                            ))}
                      </motion.div>
                  </motion.div>
                </div>              
                                       
                  </div>

                  <div className='secao3' >
                  <h2 id="GetOutFooter" >Eventos encerrados</h2>
                  <div className="destaque">
                  
                  <motion.div className='carrossel' whileTap={{cursor: "grabbing"}}>
                      <motion.div
                      className='inner'
                      drag="x"
                      dragConstraints={{right: 0, left: -width}}
                      >
                            {imagens.map(evento=>(
                              <motion.div className='item' id="secundario" key={evento}>
                                <img src={evento} alt = "Texto alt"/>
                                </motion.div>
                            ))}
                      </motion.div>
                  </motion.div>
                </div>      
                    </div>
                               
            </main>
    </div>
  )
}

export default MeusEventos