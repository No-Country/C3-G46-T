import React from 'react';
import style from './MyQr.module.css';
import Footer from '../Footer/Fotter';
var QRCode = require('qrcode.react');

const MyQr = ({id}) => {
  return (
    <div className={style.container}>
      <a href='/Home'> <div> ◀  Atrás</div></a>
      <h1> Qr </h1>
      <div className={style.qr}><QRCode value="http://persoalhealth.io/User/#id" /></div>
      <Footer />
    </div>
  )
}

export default MyQr;