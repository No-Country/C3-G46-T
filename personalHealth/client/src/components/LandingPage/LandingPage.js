import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import style from "./LandingPage.module.css"
import logo from "../../assets/logo-PH.png"
const LandingPage = () => {


  return (
    <div className={style.logo}>
      <img src={logo} alt=" " className={style.LandingPageLogo}/>
    </div>
  )
}

export default LandingPage;