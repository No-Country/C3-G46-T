import React, { useEffect } from 'react';
import Footer from '../Footer/Fotter';
import style from "./Info.module.css"
import ListGroup from 'react-bootstrap/ListGroup'
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../actions';


const Info = () => {
  const info = useSelector(state => state.info)
  const dispatch = useDispatch();

  useEffect( () => {
    console.log(info)
    dispatch(getInfo(info));
  },[])

  return (
    <div className={style.container}>
        <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>
        <h4 className={style.header}> Mi Info</h4>
        {info&&info?.map(info => ( 
        <ListGroup variant="flush">
          <>Fecha <ListGroup.Item >{info.fecha} </ListGroup.Item></>
          <>Enfermedades<ListGroup.Item>{info.blood}</ListGroup.Item></>
          <>Alergias<ListGroup.Item>{info.allergies}</ListGroup.Item></>
          <>Grupo Sanguineo<ListGroup.Item>{info.donor}</ListGroup.Item></>
          <>Enfermedades cronicas<ListGroup.Item>{info.chronicdisease}</ListGroup.Item></>
          <>Info Importante<ListGroup.Item>{info.infoimportant}</ListGroup.Item></>
        </ListGroup>
        ))}
        <h5><strong>Mi cuenta</strong></h5>
        <a href='/CrearInfo' className={style.btnPrim}>Nueva Info </a>
        <br />
        <a href='/ActualizarInfo' className={style.btnPrim}>Actualizar Info</a>
      <Footer />
    </div>
  )
}

export default Info;