import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={style.container}>
      <button className={style.button} >
        <a className={style.button} href='/Perfil'>  Mi Perfil</a>
      </button>
      <button className={style.button}>
        <a className={style.button} href='/Atenciones' > Mis Atenciones </a>
      </button>
      <button className={style.button}>
        <a className={style.button} href='/MiHistoria' > Mi Historia </a>
      </button>
    </div>
  )
}

export default Footer;