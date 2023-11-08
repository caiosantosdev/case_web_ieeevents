import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../styles/login.css'

import logo from '../assets/imagens/logo.png';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            

            <span className="login-form-tittle">
              <img src={logo} alt="IEEEvents" />
            </span>
            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'} type='email'
                value={email} onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className='wrap-input'>
              <input className={password !== "" ? 'has-val input' : 'input'} type='password'
                value={password} onChange={e => setPassword(e.target.value)} />
              <span className='focus-input' data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className='login-form-btn'>Entrar</button>
            </div>

            <div className='text-center'>
              <span className='txt1'>Não tem uma conta? </span>

              <Link id="txt2" to='/cadastro'>Cadastre-se</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login