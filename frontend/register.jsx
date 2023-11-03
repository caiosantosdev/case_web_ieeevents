import{ Link } from "react-router-dom"
import "./stylec.css"
import logo from '../../assets/ieevents.png';
import{useState} from "react";

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [text, setText] = useState("")
    const [textEnd, setTextEnd] = useState("")
    const [tel, setTel] = useState("")
    return (
        <div className="container1">
            <div className="container-register">
                <div className="wrap-register">
            <form className="register-form">
                <span className="register-form-tittle">
                    <img src={logo} alt="IEEEvents" />
                </span>
                <span className="register-form-tittle">Crie seu cadastro</span>
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
                <div className="wrap-input">
                    <input className={tel !== "" ? 'has-val input' : 'input'} type="tel"
                        value={tel} onChange={e => setTel(e.target.value)}
                        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" />
                    <span className="focus-input" data-placeholder="Telefone"></span>
                </div>
                <div className="wrap-input">
                    <input className={ text!== "" ? 'has-val input' : 'input'} type='text'
                        value={text} onChange={e => setText(e.target.value)} 
                        pattern="\d{3}\.?\d{3}\.?\d{3}\-?\d{2}" />
                    <span className="focus-input" data-placeholder="Cpf"></span>
                </div>
                <div className="wrap-input">
                    <input className={textEnd !== "" ? 'has-val input' : 'input'} type='text'
                        value={textEnd} onChange={e => setTextEnd(e.target.value)} />
                    <span className="focus-input" data-placeholder="Endereço"></span>
                </div>

                <div className="wrap-input">
                    <input className={email !== "" ? 'has-val input' : 'input'} type='email'
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div className='wrap-input'>
                    <input className={password !== "" ? 'has-val input' : 'input'} type='password'
                        value={password} onChange={e => setPassword(e.target.value)} />
                    <span className='focus-input' data-placeholder="Password"></span>
                </div>

                <div className="container-register-form-btn">
                    <button className='register-form-btn' type="submit">Cadastre-se</button>

                    <button className='voltar-form-btn' ><Link className="txt1" to='/login'>Voltar</Link>
                    </button>
                </div>

            </form>


  
            </div>
      </div>
    </div>
    )

}