import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactDom from "react-dom";
import {NavLink} from 'react-router-dom';
import style from './NavModal.module.css';

export default function NavModal({ }) {
return ReactDom.createPortal(
    <div className={style.container}>
    <h1>Hola !!</h1>
    <h1>Bienvenido!!</h1>
    <br/>
    <form>
      <NavLink to='/Login'>
        <button class='btn btn-primary'> Iniciar Sesion</button>
      </NavLink>
      <NavLink to='/SignUp' >
        <button type='button' class='btn btn-outline-primary'> Crear cuenta</button>
      </NavLink>
    </form>
    </div>,
  document.getElementById("portal")
  )
}
