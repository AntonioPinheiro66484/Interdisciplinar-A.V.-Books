import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import DetalhesProduto from './pages/DetalhesProduto'
import Pesquisa from './pages/Pesquisa'


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/DetalhesProduto" element={<DetalhesProduto/>}/>
              <Route path="/Pesquisa" element={<Pesquisa/>}/>
              <Route path="/Cadastro" element={<Cadastro/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
