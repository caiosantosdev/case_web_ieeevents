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



const TelaPrincipal = () => {
  
  const carrossel=useRef();
  const carrossel2=useRef();
  const carrossel3=useRef();
  const carrossel4=useRef();
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])
  useEffect(()=>{
    console.log(carrossel2.current?.scrollWidth, carrossel2.current?.offsetWidth)
    setWidth(carrossel2.current?.scrollWidth - carrossel2.current?.offsetWidth)
  }, [])
  useEffect(()=>{
    console.log(carrossel3.current?.scrollWidth, carrossel3.current?.offsetWidth)
    setWidth(carrossel3.current?.scrollWidth - carrossel3.current?.offsetWidth)
  }, [])
  useEffect(()=>{
    console.log(carrossel4.current?.scrollWidth, carrossel4.current?.offsetWidth)
    setWidth(carrossel4.current?.scrollWidth - carrossel4.current?.offsetWidth)
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
                <div className="principal-prim">
                  <h1>Eventos em Destaque</h1>
                  <h2>Os melhores eventos e benefícios para você</h2>
                  <div className="destaque">
                  
                    <motion.div ref={carrossel} className='carrossel' whileTap={{cursor: "grabbing"}}>
                        <motion.div
                        className='inner'
                        drag="x"
                        dragConstraints={{right: 0, left: -width}}
                        >
                              {imagens.map(evento=>(
                                <motion.div className='item' key={evento}>
                                  <img src={evento} alt = "Texto alt"/>
                                  </motion.div>
                              ))}
                        </motion.div>
                    </motion.div>
                  </div>
                </div>

                <div className='secao2'>
                  <h2 >Eventos Perto de Você</h2>
                  <div className="destaque">
                  
                    <motion.div ref={carrossel2}className='carrossel' whileTap={{cursor: "grabbing"}}>
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
                
                <div className='secao2'>
                  <h2>Eventos que acontecerão em breve</h2>

                  <div className="destaque">
                  
                  <motion.div ref={carrossel3} className='carrossel' whileTap={{cursor: "grabbing"}}>
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
                  <h2 id="GetOutFooter" >Seus Eventos Favoritados</h2>
                  <div className="destaque">
                  
                  <motion.div ref={carrossel4} className='carrossel' whileTap={{cursor: "grabbing"}}>
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

export default TelaPrincipal