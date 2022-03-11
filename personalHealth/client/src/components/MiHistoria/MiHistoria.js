import React, {useState, useEffect} from 'react';
import Footer from '../Footer/Fotter';
import Header from '../Header/Header';
import style from "./MiHistoria.module.css";
import { Accordion } from 'react-bootstrap';
const MiHistoria = () => {
    return(
        <>
        <div className={style.Header} ><Header /></div>{/*Navbar*/}
        <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={style.buttonAccordeon}>Antescedentes</Accordion.Header>
    <Accordion.Body>
             <strong>Enfermedad:</strong>diabetes tipo II
             <br></br> 
             <strong>Profesional:</strong> Juan Carlos Perez
             <br></br> 
             <strong>Diagnosticado:</strong>Julio del 2008  
             <br></br> 
             <strong>Tratamiento:</strong> Medica mento farmacologico 
             <br></br>
             <strong>Tipo de medicamento:</strong> Desilitro
             <br></br>
             <strong>Control:</strong> Cada 6 meses
             <br></br>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Antescedentes Heredofamiliares</Accordion.Header>
    <Accordion.Body>
            <strong>Enfermedad:</strong>diabetes tipo II
             <br></br> 
             <strong>Profesional:</strong> Juan Carlos Perez
             <br></br> 
             <strong>Diagnosticado:</strong>Julio del 2008  
             <br></br> 
             <strong>Tratamiento:</strong> Medica mento farmacologico 
             <br></br>
             <strong>Tipo de medicamento:</strong> Desilitro
             <br></br>
             <strong>Control:</strong> Cada 6 meses
             <br></br>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Intervenciones</Accordion.Header>
    <Accordion.Body>
            <strong>Enfermedad:</strong>diabetes tipo II
             <br></br> 
             <strong>Profesional:</strong> Juan Carlos Perez
             <br></br> 
             <strong>Diagnosticado:</strong>Julio del 2008  
             <br></br> 
             <strong>Tratamiento:</strong> Medica mento farmacologico 
             <br></br>
             <strong>Tipo de medicamento:</strong> Desilitro
             <br></br>
             <strong>Control:</strong> Cada 6 meses
             <br></br>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Exámenes Complementarios</Accordion.Header>
    <Accordion.Body>
             <strong>Enfermedad:</strong>diabetes tipo II
             <br></br> 
             <strong>Profesional:</strong> Juan Carlos Perez
             <br></br> 
             <strong>Diagnosticado:</strong>Julio del 2008  
             <br></br> 
             <strong>Tratamiento:</strong> Medica mento farmacologico 
             <br></br>
             <strong>Tipo de medicamento:</strong> Desilitro
             <br></br>
             <strong>Control:</strong> Cada 6 meses
             <br></br>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        <div class="mt-5"><Footer /></div>{/*/Footer*/}
        </>
    )
}

export default MiHistoria