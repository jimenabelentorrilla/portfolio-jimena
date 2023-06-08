import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*assets*/
import ProyectoUno from "../assets/portfolio.png";
import ProyectoDos from "../assets/streaming.png";
import ProyectoTres from "../assets/gourmet.jpg";

function Proyecto( { imagen, titulo, skills, linkSitio }) {
    return (
        <>
            <div className='contenedor-card'>
                <a target="_blank" href={linkSitio}><img className="img-proyecto-size" src={imagen} /></a>
                <div className='contenedor-info-flex'>
                    <div className='contenedor-titulo-skills'>
                        <h3>{titulo}</h3>
                        <p>{skills}</p>
                    </div>
                    <div className='btn-sitio'>
                        <a href={linkSitio} target="_blank"><span>Ver sitio</span></a>
                    </div>
                </div>
            </div>
        </>
    );
}

function Proyectos(){
    return(
        <>
            <Container id="proyectos" className="flex-proy">
                <Row>
                    <Col>
                        <div className='contenedor-title-proy'>
                            <h2>Proyectos</h2>
                            <div className='line-7'></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='contenedor-proyectos'>
                            <Proyecto 
                                imagen={ProyectoUno}
                                titulo="Portfolio Fotografia"
                                skills="React - CSS"
                                linkSitio="" />
                            <Proyecto 
                                imagen={ProyectoDos}
                                titulo="Streaming Website"
                                skills="React - CSS"
                                linkSitio="" />
                            <Proyecto 
                                imagen={ProyectoTres}
                                titulo="Gourmet Burger"
                                skills="React - CSS - Bootstrap"
                                linkSitio="https://gourmet-burger-kitchen.netlify.app/" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}




export default Proyectos;