import{ Link } from "react-router-dom";
import "../styles/cadastro.css";
import logo from '../assets/imagens/logo.png';
import icone from '../assets/imagens/icone.png';
import{ useState} from "react";
import { cpfMask } from "./cpfMask";
import {Eye} from "phosphor-react";





const Cadastro = () => {
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cpf, setCpf] = useState("")
    const [textEnd, setTextEnd] = useState("")
    const [tel, setTel] = useState("")
    
    const[hidden, sethidden] = useState(false)

    const visualizar_senha = () => {
        sethidden(!hidden)    
    }

    function formatName(name) {
        if (!name) return '';
        name = name.trim(); 
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();}

    const handleForm = async () => {
        try{
            const response = await fetch('localhost:6000/user',{
                method: 'POST',
                body: JSON.stringify({
                    nome: name,
                    sobreneme: lastName,
                    telefone: tel,
                    cpf: cpf,
                    endereco: textEnd,
                    email: email,
                    senha: senha
                })
            })
            const json = await response.json()
            console.log(response.status)
            console.log(json)
        } catch(error){
            console.log("erro")
        }
    }
   

    return (
        
        
        <div>
            <nav className="navegacao">
                <Link to="/">
                    <img src={icone} alt="Logo" className="icone_p"/>
                </Link>
            </nav>
            <div className="container1">
            
                <div className="container-register">
                    <div className="wrap-register">
                <form className="register-form" onSubmit={handleForm}>
            
                        <div className="container__titulo">
                            <img className="logo" src={logo} alt="IEEEvents" />
                            <p className="titulo-principal">Crie seu cadastro</p>
                            <p>Já possui uma conta? Faça seu <Link to='/login' className="login_link">login</Link></p>
                        </div>
            
                    <div className="container__nomesobre">
                        <div className="wrap-input">
                            <input className={name !== "" ? 'has-val input' : 'input'} type='name'
                                value={name} onChange={e =>setName(formatName(e.target.value))} />
                            <span className="focus-input" data-placeholder="Nome"></span>
                        </div>
                        <div className="wrap-input">
                            <input className={lastName !== "" ? 'has-val input' : 'input'} type='name'
                                value={lastName} onChange={e =>setLastName(formatName(e.target.value))} />
                            <span className="focus-input" data-placeholder="Sobrenome"></span>
                        </div>
                    </div>
                    <div className="container__telCPF">
                        <div className="wrap-input">
                            <input className={tel !== "" ? 'has-val input' : 'input'} type="tel"
                                value={tel} onChange={e => {
                                    const formattedTel = e.target.value
                                    .replace(/\D/g, '') 
                                    .replace(/(\d{2})(\d)/, '($1) $2')
                                    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
                                    .replace(/(-\d{4})(\d+?$)/,'$1')
                                       
                                    setTel(formattedTel);
                                  }}
                                  maxLength='15'
                                  pattern="^\(\d{2}\) \d{5}-\d{4}$" />
                            <span className="focus-input" data-placeholder="Telefone"></span>
                        </div>
                        <div className="wrap-input">
                            <input className={ cpf !== "" ? 'has-val input' : 'input'} type='cpf'
                                value={cpf} onChange={(e) =>{ setCpf(cpfMask(e.target.value))}}
                                 maxLength= '14'/>
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
                        <div className="campo_senha">
                            <input  id="myInput" className={senha !== "" ? 'has-val input' : 'input'}  type={hidden ? 'text'  : 'password'}
                                value={senha} onChange={e => setSenha(e.target.value)} />
                            
                            <span className='focus-input' data-placeholder="Senha"></span>
                            <Eye size={32} onClick={visualizar_senha} className="icone_olho"/>
                        </div>
                    </div>
                    <div className="container-register-form-btn">
                        <Link className="txt1" to='/'>
                            <button id="voltar" className='voltar-form-btn' >Voltar
                            </button>
                        </Link>
                        <Link className="txt2">
                            <button id="cadastrar" className='register-form-btn' type="submit">Cadastre-se</button>
                        </Link>
            
                    </div>
                </form>
                </div>
                  </div>
                </div>
        </div>
   
    )

}

export default Cadastro