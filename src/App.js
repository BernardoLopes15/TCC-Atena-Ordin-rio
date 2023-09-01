import { BrowserRouter, Routes, Route } from "react-router-dom";

import Apresentacao from "./pages/presentation/index";
import Login from "./pages/login/index";
import Home from "./pages/home/index";
import BuscarPsicologo from "./pages/search_psychologist/index";
import Perfil from "./pages/profile";
import CadastroCliente from "./pages/cadastro/cliente";
import CadastroPsicologo from "./pages/cadastro/psicologo";
import Consulta from "./pages/consulta";

const App = () =>{
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Apresentacao />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/buscaPsicologo" element={<BuscarPsicologo />}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/cadastro" element={<CadastroCliente />}/>
      <Route path="/cadastroPsicologo" element={<CadastroPsicologo />}/>
      <Route path="/consultas" element={<Consulta />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;