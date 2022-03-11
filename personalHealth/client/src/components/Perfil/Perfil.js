import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions';
import Footer from '../Footer/Fotter';
import ListGroup from 'react-bootstrap/ListGroup'
import style from './Perfil.module.css'


const Perfil = () => {
  const user = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user)
    dispatch(getUser());
  }, [])

  return (
    <>
      <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>
      <div className={style.formPerfil} >
        <h1><strong>Mis datos</strong></h1>
        {user&&user?.map( user => (
        <ListGroup variant="flush">
          <ListGroup.Item >{user.documento} </ListGroup.Item>
          <ListGroup.Item>{user.names}</ListGroup.Item>
          <ListGroup.Item>{user.lastname}</ListGroup.Item>
          <ListGroup.Item>{user.sex}</ListGroup.Item>
          <ListGroup.Item>{user.adress}</ListGroup.Item>
          <ListGroup.Item>{user.phone}</ListGroup.Item>
          <ListGroup.Item>{user.healthprovider}</ListGroup.Item>
         <ListGroup.Item>{user.email}</ListGroup.Item>
        </ListGroup>
        ))}
        <h1><strong>Mi cuenta</strong></h1> {/* Podria ser para actualizar datos */}
        <a href='/TerminosCondiciones' className={style.btnPrim}>Terminos y condiciones </a>
        <br />
        <button type="submit" className={style.btnPrim}>Cerrar sesión</button>
      </div>
      <Footer />
    </>
  )
}

export default Perfil;