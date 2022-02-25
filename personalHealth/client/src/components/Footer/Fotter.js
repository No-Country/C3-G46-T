import React from 'react';
import style from "./Footer.module.css"
import MiPerfilBtn from "../../assets/MiPerfilBtn.png"
import MiHistoria from "../../assets/MiHistoriaBtn.png"
import MiAtencionesBtn from "../../assets/MisAtencionesBtn.png"

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.button}>
        <a className={style.button} href='/Perfil'>
          <img src={MiPerfilBtn} alt=""/></a>
      </div>
      <div className={style.button}>
        <a className={style.button} href='/Atenciones' >
          <img src={MiAtencionesBtn} alt=""/>
        </a>
      </div>
      <div className={style.button}>
        <a className={style.button} href='/MiHistoria' >
        <img src={MiHistoria} alt=""/> </a>
      </div>

    </div>
  )
}

export default Footer;