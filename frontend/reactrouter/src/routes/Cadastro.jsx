import{ Link } from "react-router-dom"
import "../styles/cadastro.css"
import logo from '../assets/imagens/logo.png';
import{useState} from "react";


const Cadastro = () => {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cpf, setCpf] = useState("")
    const [textEnd, setTextEnd] = useState("")
    const [tel, setTel] = useState("")
    return (
        <div className="container1">
            <div className="container-register">
                <div className="wrap-register">
            <form className="register-form">
                
                    <div className="container__titulo">
                        <img className="logo" src={logo} alt="IEEEvents" />
                        <p className="titulo-principal">Crie seu cadastro</p>
                        <p>Já possui uma conta? Faça seu <Link to='/login'>login</Link></p>
                    </div>
                
                <div className="container__nomesobre">
                    <div className="wrap-input">
                        <input className={name !== "" ? 'has-val input' : 'input'} type='name'
                            value={name} onChange={e => setName(e.target.value)} />
                        <span className="focus-input" data-placeholder="Nome"></span>
                    </div>
                    <div className="wrap-input">
                        <input className={lastName !== "" ? 'has-val input' : 'input'} type='name'
                            value={lastName} onChange={e => setLastName(e.target.value)} />
                        <span className="focus-input" data-placeholder="Sobrenome"></span>
                    </div>
                </div>
                <div className="container__telCPF">
                    <div className="wrap-input">
                        <input className={tel !== "" ? 'has-val input' : 'input'} type="tel"
                            value={tel} onChange={e => setTel(e.target.value)}
                            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" />
                        <span className="focus-input" data-placeholder="Telefone"></span>
                    </div>
                    <div className="wrap-input">
                        <input className={ cpf== "" ? 'has-val input' : 'input'} type='cpf'
                            value={cpf} onChange={e => setCpf(e.target.value)}
                             maxLength={14}/> 
                        <span className="focus-input" data-placeholder="CPF"></span>
                    </div>
                </div>
                <div className="wrap-input">
                    <input className={textEnd !== "" ? 'has-val input' : 'input'} type='text'
                        value={textEnd} onChange={e => setTextEnd(e.target.value)} />
                    <span className="focus-input" data-placeholder="Endereço"></span>
                </div>

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

                <div className="container-register-form-btn">
                <button id="voltar" className='voltar-form-btn' ><Link className="txt1" to='/'>Voltar</Link>
                    </button>
                    <button id="cadastrar" className='register-form-btn' type="submit">Cadastre-se</button>

                    
                </div>

            </form>


  
            </div>
      </div>
    </div>
    )

}

export default Cadastro