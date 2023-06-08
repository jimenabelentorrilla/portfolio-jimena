import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='contenedor-footer'>
                            <div className='nav-icons'>
                                <a href="https://github.com/jimenabelentorrilla" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' style={{ color: '#000' }} /></a>
                                <a href="https://www.linkedin.com/in/jimena-belen-torrilla/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: '#000' }} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>        
    );
}

export default Footer;