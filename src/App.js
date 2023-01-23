import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Body from './components/Body/Body'
import PreFooter from './components/Footer/Prefooter/PreFooter'
import Footer from './components/Footer/Footer'
import Carrossel from './components/Carrossel/Carrossel';

function App() {
  return (
    <div className="App">
       <Header></Header>
        <NavBar></NavBar>
        <Body></Body>
        <PreFooter></PreFooter>
        <Footer></Footer>

    </div>
  );
}

export default App;
