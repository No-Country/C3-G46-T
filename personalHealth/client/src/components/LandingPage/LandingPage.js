import React from 'react';
import style from "./LandingPage.module.css"
import logo from "../../assets/logo-PH.png"
import {Animated} from "react-animated-css";

const LandingPage = () => {
  return (
    <Animated 
      animationIn="pulse"
      animationOut="pulse"
      animationInDuration={1800}
      animationOutDuration={1800}
      isVisible={true}>
    <div className={style.logo}>
      <img src={logo} alt="P / H" className={style.LandingPageLogo}/>
    </div>
    </Animated>
  )
}
export default LandingPage;