import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import ImageCliente from "../../assets/imgs/userExemplo.png"
import { Link } from "react-router-dom";

const userName = "Júlia Souza ferraz";
const userEmail = "Julia.sousza95@gmail";
const userCPF = "560885963-41";
const userPhone = "(13) 2826-1764";
const userDate = "14/05/1995";

const Perfil = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100 perfilCliente">
                        <div className="lg:w-6/12 pt-16 lg:px-4 content-perfilCliente">

                            <div className="h-64 lg:rounded-t-lg bg-purple-800 content-superior">

                            <h2 className="text-xl pt-4 name" >{userName}</h2>

                            </div>

                              <div className="h-96 lg:rounded-b-lg bg-white px-8">

                                <div className="h-0 flex items-center mb-16">
                                    <div className="w-32 h-32 flex-0 rounded-full bg-purple-200 imagePerfil">
                                       <img src={ImageCliente} alt="foto de perfil"></img>
                                    </div>
                                </div>

                                <div className="py-4 flex justify-between dados">

                                    <div>
                                        <h2 className="title">Dados Pessoais</h2>
                                       <ul>
                                        <li>E-mail: {userEmail}</li>
                                        <li>CPF:  {userCPF}</li>
                                        <li>Telefone:  {userPhone}</li>
                                        <li>Data de nascimento:  {userDate}</li>
                                       </ul>
                                    </div>
                                </div>

                                <div className="text-right">
                                <Link><button type="button" className="btn">Editar Perfil</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Rodape estilo="lg:bg-purple-100" />
        </>
    )
}

export default Perfil;