import React from 'react';
import "animate.css";
import CV from "../assets/CV-Torrilla-Jimena-Belen.pdf";
function Home() {
  return(
    <div className='home'>       
        <nav className='nav-frame-23'>
            <div className='nav-g4'>
                <div className='nav-logo'>
                    <p>J.</p>
                </div>
                <div>
                    <ul className='nav-ul'>
                        <li><a className="li-black" href="#proyectos">Proyectos</a></li>
                        <li><a className="li-black" href="#sobremi">Sobre mi</a></li>
                        <li><a className="li-violet" href={CV} target="_blank">Descargar CV</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='home-flex'>
            <div className='frame-24 animate__animated animate__fadeIn'>
            <div className='home-group-3'>
                <div className='home-frame-21'>
                    <div className='line-7'></div>
                    <p>Hola, soy Jimena Belén Torrilla</p>
                </div>
                <h1>Frontend Developer</h1>
            </div>
            <div className='home-group-4'>
                <div className='line-7'></div>
                <p>Busco ofrecer soluciones innovadoras y agradables a cada proyecto. Con habilidades en tecnologías como <b>React, CSS, JavaScript, Bootstrap, Sass y Git</b>, me enfoco en crear webs optimizadas, eficientes y creativas. </p>
            </div>
        </div>
        </div>
        
    </div>
);
}

export default Home;