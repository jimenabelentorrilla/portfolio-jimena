import { useState } from 'react'
import './App.css'
import Home from './componentes/Home';
import Proyects from './componentes/Proyects';
import ProyectoUno from "./assets/portfolio.png";
import ProyectoDos from "./assets/streaming.png";

function App() {
  return (
    <div className='app'>
      <Home />
      <div className='contenedor-seccion-proyectos'>
        <div className='contenedor-title-proy'>
          <h2>Proyectos</h2>
          <div className='line-7'></div>
        </div>
        <div id="proyectos" className='contenedor-proyectos'>
        <Proyects 
          imagen={ProyectoUno}
          titulo="Portfolio Fotografia"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/" />
          <Proyects 
          imagen={ProyectoUno}
          titulo="Portfolio Fotografia"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/" />
        <Proyects 
          imagen={ProyectoUno}
          titulo="Portfolio Fotografia"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/" />

        </div>
      </div>
      
    </div>
  )
}

export default App
