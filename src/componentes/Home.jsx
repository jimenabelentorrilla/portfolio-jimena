import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "animate.css";

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
                        <li><a className="li-violet" href="">Descargar CV</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='frame-24 animate__animated animate__fadeIn'>
            <div className='home-group-3'>
                <div className='home-frame-21'>
                    <div className='line-7'></div>
                    <p>Frontend developer</p>
                </div>
                <h1>Jimena <span className='sangria-h1'>Torrilla</span></h1>
            </div>
            <div className='home-group-4'>
                <div className='line-7'></div>
                <p>Con habilidades en React, CSS, JavaScript y Bootstrap, me enfoco en crear webs optimizadas y eficientes. Busco siempre mejorar la experiencia de los usuarios y ofrecer una navegación fluida y agradable. saradasdasdasdadasdasdasdsadsa</p>
            </div>
        </div>
    </div>
);
}

export default Home;