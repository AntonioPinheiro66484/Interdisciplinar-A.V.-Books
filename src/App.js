import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import CadastroLivro from './pages/CadastroLivro'
import CadastroFornecedor from './pages/CadastroFornecedor'
import CadastroPedido from './pages/CadastroPedido'
import DetalhesProduto from './pages/DetalhesProduto'
import Pesquisa from './pages/Pesquisa'
import Administracao from './pages/Administracao'
import LoginCliente from './pages/LoginCliente';
import LoginAdm from './pages/LoginADM';
import BotaoAcessibilidade from "./components/BotaoAcessibilidade";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/DetalhesProduto" element={<DetalhesProduto/>}/>
              <Route path="/Pesquisa" element={<Pesquisa/>}/>
              <Route path="/Cadastro" element={<Cadastro/>}/>
              <Route path="/CadastroLivro" element={<CadastroLivro/>}/>
              <Route path="/CadastroFornecedor" element={<CadastroFornecedor/>}/>
              <Route path="/CadastroPedido" element={<CadastroPedido/>}/>
              <Route path="/Administracao" element={<Administracao/>}/>
              <Route path="/LoginCliente" element={<LoginCliente/>}/>
              <Route path="/LoginAdm" element={<LoginAdm/>}/>
          </Routes>
      </Router>
      <BotaoAcessibilidade/>
    </div>
  );
}

export default App;
