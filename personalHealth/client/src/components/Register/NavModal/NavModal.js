import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactDom from "react-dom";
import {NavLink} from 'react-router-dom';
import style from './NavModal.module.css';

export default function NavModal({ }) {
return ReactDom.createPortal(
    <div className={style.container}>
      <div className={style.titleContainer}>
    <h1 className={style.title}>Hola!</h1>
    <h1 className={style.title2}>Bienvenido</h1>
      </div>
    <form >
      <NavLink to='/Login'>
        <button className={style.btnPrim}> Iniciar Sesion</button>
      </NavLink>
      <NavLink to='/SignUp' >
        <button type='button' className={style.btnSecon}> Crear cuenta</button>
      </NavLink>
    </form>
    </div>,
  document.getElementById("portal")
  )
}
