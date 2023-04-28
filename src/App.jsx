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
        <div id="proyectos" className='contenedor-proyectos'>
          
          
        </div>
      </div>
      
    </div>
  )
}

export default App
