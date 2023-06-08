import React from 'react';
import "animate.css";
import CV from "../assets/CV-Torrilla-Jimena-Belen.pdf";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return(
    <>
        <Container>
            <Row className='home-height'>
                <Col xs={12} lg={6}>
                    <div className='home-group-3'>
                    <div className='home-frame-21'>
                        <div className='line-7'></div>
                        <p>Hola, soy Jimena Belén Torrilla</p>
                    </div>
                    <h1>Frontend Developer</h1>
                </div>
                </Col>
                <Col xs={12} lg={6}>
                <div className='home-group-4'>
                <div className='line-7'></div>
                <p>Busco ofrecer soluciones innovadoras y agradables a cada proyecto. Con habilidades en tecnologías como <b>React, CSS, JavaScript, Bootstrap, Sass y Git</b>, me enfoco en crear webs optimizadas, eficientes y creativas. </p>
            </div>
                </Col>
            </Row>
        </Container>
    </>
    
);
}

export default Home;
