import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import imgcliente from "../../assets/client_cadastro.png";
import imgpsicologo from "../../assets/psicologo_cadastro.png";
import logoAtena from "../../assets/imgs/logo_purple.png";

import '../login/styles.css';

import { CSSTransition } from "react-transition-group";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [menucadastro, setMenuCadastro] = useState(false);

    const selectCadastro = () =>{
        setMenuCadastro(menucadastro ? false : true);
    }

    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, []);

    const enviar = async e => {
        e.preventDefault();

        let login = JSON.stringify({
            senha: senha,
            email: email
        });

        //sessionStorage.setItem('paciente', JSON.stringify());
        //document.getElementById("cadastrarImagem").click();

          axios.post('http://localhost:8080/TCC-Atena-Ordinario/backend/validarLogin.php', JSON.stringify(login))
          .then((response) => {
            console.log(response);
            //alert(JSON.stringify(response.data));
          })
          .catch((error) => console.error('Erro ao buscar os dados:', error));

        //sessionStorage.removeItem('paciente');
    }

    return(
        <>
            {/*
                <CSSTransition
                    in={!anima}
                    timeout={100}
                    classNames="page"
                    unmountOnExit
                >
                    <div className="w-full min-h-screen flex items-center fixed z-50 justify-center bg-white">
                        <img className="w-96" loading="lazy" src={logoAtena} alt="logo atena" />
                    </div>
                </CSSTransition>
            */}
            <main>
                <article>
                    <div className="min-h-screen flex items-center justify-center">
                        <CSSTransition
                            in={anima}
                            timeout={1000}
                            classNames="page"
                            unmountOnExit
                        >
                            <div>
                                <div className={`flex items-center justify-center transition-blur duration-300 ${menucadastro && "blur-sm"} rounded-xl bg-purple-500 content-login`}>
                                    <div className="w-96 p-8 hidden md:block text">
                                        <h2 className="text-right">É o nosso dever tornar este mundo melhor para as mulheres.</h2>
                                    </div>
                                    <div className="w-screen md:w-96 md:rounded-xl flex items-center justify-center bg-white loge">
                                        <div>
                                            <h2 className="text-xl text-center mt-8 title" >Seja bem vindo(a)</h2>
                                            <div className="flex justify-center">
                                            <Link to="/"> <img loading="lazy" className="w-72 h-72" src={logoAtena} alt="atena" /> </Link>
                                            </div>
                                            <div className="flex justify-center inputs">
                                                <div className="w-72 content-inputs">
                                                    <p>E-mail</p>
                                                    <input className="w-full px-2 py-1 border border-black my-2" onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Digite aqui"/>
                                                    <p>Senha</p>
                                                    <input className="w-full px-2 py-1 border border-black mt-2" onChange={(e)=>setSenha(e.target.value)} value={senha} type="password" placeholder="Digite aqui"/> 
                                                    <button className="w-full px-2 py-1 mt-4 btn" onClick={enviar}>Entrar</button>
                                                    <h2 className="text-lg my-8 account">Não tem uma Conta ? <button className="text-purple-500 font-bold hover:underline underline-offset-2" onClick={selectCadastro}>Crie uma</button></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {
                                    menucadastro && <div className="fixed inset-0 flex items-center justify-center square" onClick={()=>setMenuCadastro(false)}>
                                        <div className="p-4  md:bg-white type-account">
                                  

                                            <h2 className="text-xl font-bold text-purple-500">Contas</h2>
                                            <h2 className="text-xl">Selecione um tipo de conta:</h2>

                                            <div className="w-96 px-4 flex justify-between mt-8 accounts">
                                                <Link to="/cadastro" className="cursor-pointer hover:text-purple-500 account-usuario">
                                                    <img loading="lazy" className="w-32 h-32 rounded-full border border-gray-200" src={imgcliente} alt="client" />
                                                    <h2 className="text-lg">Usuária</h2>
                                                </Link>
                                                <Link to="/cadastroPsicologo" className="cursor-pointer hover:text-purple-500 account-psicologo">
                                                    <img loading="lazy" className="w-32 h-32 rounded-full border border-gray-200" src={imgpsicologo} alt="client" />
                                                    <h2 className="text-lg">Psicológo(a)</h2>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>   
                                }
                            </div>
                        </CSSTransition>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Login;

