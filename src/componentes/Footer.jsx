import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <div className='contenedor-footer'>
            <div className='nav-icons'>
                <a href="https://github.com/jimenabelentorrilla" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' style={{ color: '#000' }} /></a>
                <a href="https://www.linkedin.com/in/jimena-belen-torrilla/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: '#000' }} /></a>
            </div>
        </div>
    );
}

export default Footer;