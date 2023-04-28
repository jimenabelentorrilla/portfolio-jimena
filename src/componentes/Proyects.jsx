import React from 'react';

function Proyects( {imagen, titulo, skills, linkSitio}) {
    return (
        <div className='contenedor-card'>
            <a target="_blank" href={linkSitio}><img className="img-proyecto-size" src={imagen} /></a>
            <div className='contenedor-info-flex'>
                <div className='contenedor-titulo-skills'>
                    <h3>{titulo}</h3>
                    <p>{skills}</p>
                </div>
                <div>
                    <a className='btn-sitio' target="_blank" href={linkSitio}><span>Ver sitio</span></a>
                </div>
            </div>
        </div>
    );
}

export default Proyects;