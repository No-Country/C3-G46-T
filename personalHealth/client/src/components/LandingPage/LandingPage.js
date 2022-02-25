import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import style from "./LandingPage.module.css"

const LandingPage = () => {

  return (
    <div className={style.logo}>
      <img src="https://myhealthwatcher.es/wp-content/uploads/2021/09/animacion_corazon.gif" alt="" width="300px"/>
    </div>
  )
}

export default LandingPage;