import React from 'react';
import style from './MyQr.module.css';
import Footer from '../Footer/Fotter';

var QRCode = require('qrcode.react');

const MyQr = ({ id }) => {
  return (
    <>
      <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>
        <h1 className={style.header}> Qr </h1>
      <div className={style.container}>
        <div className={style.qr}><QRCode value="http://persoalhealth.io/Info/#id" /></div>
        <Footer />
      </div>
    </>
  )
}

export default MyQr;