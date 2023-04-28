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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsam ullam aspernatur placeat dignissimos vero commodi labore non minus, fugit ratione numquam iusto facilis magnam quos velit voluptatem iure at Lorem ipsum dolor sit.</p>
            </div>
            <div className='contenedor-img-sm'>
                <img src={Desk}/>
            </div>
        </div>
    );
}

export default About;