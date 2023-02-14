import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import DetalhesProduto from './pages/DetalhesProduto'
import Pesquisa from './pages/Pesquisa'
import Administracao from './pages/Administracao'


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/DetalhesProduto" element={<DetalhesProduto/>}/>
              <Route path="/Pesquisa" element={<Pesquisa/>}/>
              <Route path="/Cadastro" element={<Cadastro/>}/>
              <Route path="/Administracao" element={<Administracao/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
