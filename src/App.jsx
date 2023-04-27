import { useState } from 'react'
import './App.css'
import Home from './componentes/Home';
import Proyects from './componentes/Proyects';
import ProyectoUno from "./assets/portfolio.png";
import ProyectoDos from "./assets/streaming.png";

function App() {
  return (
    <>
      <Home />
      <div className='contenedor-seccion-proyectos'>
        <div id="proyectos" className='contenedor-proyectos'>
          <Proyects 
          imagen={ProyectoUno}
          titulo="Portfolio Fotografia"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/"
          />
          <Proyects 
          imagen={ProyectoUno}
          titulo="Portfolio Fotografia"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/"
          /><Proyects 
          imagen={ProyectoUno}
          titulo="Portfolio Fotografia"
          skills="React - CSS"
          linkSitio="https://photography-portfolio-jiment4.netlify.app/"
          />   
        </div>
      </div>
      
    </>
  )
}

export default App
