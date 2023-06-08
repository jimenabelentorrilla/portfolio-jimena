import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*componentes*/ 
import Nav from "./componentes/Nav";
import Home from './componentes/Home';
import Proyectos from './componentes/Proyects';
import About from './componentes/About';
import Footer from "./componentes/Footer";


function App() {
  return (
    <div className='app'>
      <Nav />
      <Home />
      <Proyectos />
      <About />
      <Footer />
    </div>
  )
}

export default App;
