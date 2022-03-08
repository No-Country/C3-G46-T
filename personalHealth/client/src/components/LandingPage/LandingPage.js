import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import style from "./LandingPage.module.css"
const LandingPage = () => {

  return (
    <div className={style.logo}>
      <img src='../assets/logo-HP.png'/>
    </div>
  )
}

export default LandingPage;