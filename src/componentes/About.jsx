import React from 'react';
/*assets*/
import Profile from "../assets/Profilee.png";
import Desk from "../assets/desk.png"; 
function About() {
    return (
        <div id="sobremi" className='contenedor-sobremi'>
            <div className='contenedor-texto-sm'> 
                <h2>Sobre mi</h2>
                <div className='line-7'></div>
                <p>Soy una apasionada del <b>desarrollo web</b> en constante evolución. Hace un año comencé a estudiar y desde entonces no he dejado de aprender. Soy <b>meticulosa</b> en mi trabajo, me tomo muy en serio cada proyecto. Disfruto de cada nuevo desafío que se me presenta y estoy siempre en búsqueda de adquirir nuevas habilidades.</p>
            </div>
            <div className='contenedor-img-sm'>
                <img src={Desk}/>
            </div>
        </div>
    );
}

export default About;