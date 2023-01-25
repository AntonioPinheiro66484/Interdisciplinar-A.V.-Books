import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Body from './components/Body/Body'
import PreFooter from './components/Footer/Prefooter/PreFooter'
import Footer from './components/Footer/Footer'
import Carrossel from './components/Carrossel/Carrossel'
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
