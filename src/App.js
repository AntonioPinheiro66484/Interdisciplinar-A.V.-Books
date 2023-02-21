import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import DetalhesProduto from './pages/DetalhesProduto'
import Pesquisa from './pages/Pesquisa'
import Administracao from './pages/Administracao'
import LoginCliente from './pages/LoginCliente/LoginCliente';
import LoginAdm from './pages/LoginADM/LoginADM';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/DetalhesProduto" element={<DetalhesProduto/>}/>
              <Route path="/Pesquisa" element={<Pesquisa/>}/>
              <Route path="/Cadastro" element={<Cadastro/>}/>
              <Route path="/Administracaof" element={<Administracao/>}/>
              <Route path="/LoginCliente" element={<LoginCliente/>}/>
              <Route path="/LoginAdm" element={<LoginAdm/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
