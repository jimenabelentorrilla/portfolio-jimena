import './App.css'
/*componentes*/ 
import Home from './componentes/Home';
import Proyects from './componentes/Proyects';
import About from './componentes/About';
import Footer from "./componentes/Footer";
/*assets*/
import ProyectoUno from "./assets/portfolio.png";
import ProyectoDos from "./assets/streaming.png";
import ProyectoTres from "./assets/burger.jpg";

function App() {
  return (
    <div className='app'>
      <Home />
      <div id="proyectos" className='contenedor-seccion-proyectos'>
        <div className='contenedor-title-proy'>
          <h2>Proyectos</h2>
          <div className='line-7'></div>
        </div>
        <div  className='contenedor-proyectos'>
        <Proyects 
          imagen={ProyectoUno}
          titulo="Portfolio Fotografia"
          skills="React - sarasa - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/" />
          <Proyects 
          imagen={ProyectoDos}
          titulo="Streaming Website"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/" />
        <Proyects 
          imagen={ProyectoTres}
          titulo="Burger Landing"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/" />
        </div>
      </div>
      <About />
      <Footer />
    </div>
  )
}

export default App;
