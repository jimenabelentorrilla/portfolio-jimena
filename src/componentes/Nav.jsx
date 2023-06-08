import React from 'react';
import CV from "../assets/CV-Torrilla-Jimena-Belen.pdf";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Nav() {
  return(
    <>
        <Container fluid>
            <Row>
                <Col>
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
                </Col>
            </Row>
        </Container>
    </>
    
);
}

export default Nav;