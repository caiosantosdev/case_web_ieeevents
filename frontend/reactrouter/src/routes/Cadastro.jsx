import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {
  //redirect
  const navigate = useNavigate()

  const handleVoltar = () => {
    return navigate("/");
  }
    
  return (
    <div>
        <h1>Crie seu cadastro</h1>
        <h3>Já possui uma conta? Faça seu *login*</h3>
        <button onClick={handleVoltar}>Voltar</button>
    </div>
  )
}

export default Cadastro