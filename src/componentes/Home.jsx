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
                        <li>
                            <a className="li-black" href="">Proyectos</a>
                        </li>
                        <li>
                            <a className="li-violet" href="">Descargar CV</a>
                        </li>
                        <li>
                            <a className="li-black"href="">Sobre mi</a>
                        </li>
                    </ul>
                </div>
                <div className='nav-icons'>
                <a href="https://github.com/jimenabelentorrilla" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' style={{ color: '#000' }} /></a>
                <a href="https://www.linkedin.com/in/jimena-belen-torrilla/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: '#000' }} /></a>
                </div>
            </div>
        </nav>
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
                <p>Con habilidades en React, CSS, JavaScript y Bootstrap, me enfoco en crear webs optimizadas y eficientes. Busco siempre mejorar la interacción humana con la tecnología y ofrecer una navegación fluida y agradable.</p>
            </div>
        </div>
    </div>
);
}

export default Home;