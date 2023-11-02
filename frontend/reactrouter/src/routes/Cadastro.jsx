import React from 'react'
import { useNavigate } from 'react-router-dom'


import '../styles/cadastro.css'

const Cadastro = () => {
  //redirect
  const navigate = useNavigate()

  const handleVoltar = () => {
    return navigate("/");
  }
    
  return (
    <>
        
        <body>
            <section className="cadastro">
                <div className='cadastro-texto'>
                    <h1 className='cadastro-texto__titulo'>Crie seu cadastro</h1>
                    <h2 className='cadastro-texto__mensagem'>Já possui uma conta? Faça seu *login*</h2>
                </div>
                <div className='cadastro-botoes'>
                    <button onClick={handleVoltar} className='botao' id="voltar">Voltar</button>
                    <button onClick={handleVoltar} className='botao' id="cadastre">Cadastre-se</button>
                </div>
            </section>
        </body>
        
    </>
  )
}

export default Cadastro