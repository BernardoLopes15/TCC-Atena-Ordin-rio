import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import atenaText from "../assets/imgs/logo_navbar.png";
import imgmulher from "../assets/user.png";

const NavBar = () =>{
    const [menu, setMenu] = useState(false);
    const [usuario, setUsuario] = useState();
    let sair = useRef();

    const abreMenu = () =>{
        setMenu(menu ? false : true);
    }

    const irParaOTopo = () => {
        window.scrollTo(0, 0);
    }

    const voltarPagina = () =>{
        sair.current?.click();
    }

    useEffect(()=>{
        let response = JSON.parse(sessionStorage.getItem('token')) || voltarPagina();
        if(!JSON.parse(sessionStorage.getItem('token'))) return;
        response?.nivelAcesso !== "paciente" && voltarPagina();
        if(response) setUsuario(response.nome);
    });

    const excluirToken = () => {
        irParaOTopo();

        sessionStorage.removeItem('token');
    }

    return(
        <header>
            <nav>
                <div className="w-full px-12 md:shadow-md z-10 fixed text-white bg-purple-900">
                    <div className="w-full h-16 flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-8" src={atenaText} alt="atena-text" />
                            <div className="hidden md:flex ml-8">
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/homeCliente">Início</Link></h2>
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/buscaPsicologo">Psicólogos</Link></h2>
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/consultas">Consultas</Link></h2>
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/perfilCliente">Perfil</Link></h2>
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer" onClick={abreMenu}>
                            <p className="mr-4">{usuario}</p>
                            <img src={imgmulher} alt="user" />
                        </div>
                    </div>
                    <li className="hidden"><Link onClick={excluirToken} to="/" ref={sair}>Sair</Link></li>
                    <CSSTransition
                        in={menu}
                        timeout={300}
                        classNames="nav"
                        unmountOnExit
                    >
                        <ul className="py-4">
                            <li className="py-2"><Link onClick={irParaOTopo} to="/homeCliente">Início</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/buscaPsicologo">Psicólogos</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/consultas">Consultas</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/perfilCliente">Perfil</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo}>Opções</Link></li>
                            <li className="py-2"><Link onClick={excluirToken} to="/">Sair</Link></li>
                        </ul>
                    </CSSTransition>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;