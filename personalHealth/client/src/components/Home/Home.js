import React, {useState, useEffect} from 'react';
import Footer from '../Footer/Fotter';
import NavModal from '../Register/NavModal/NavModal';
import style from "./Home.module.css";


const Home = () => {
  
  return (
    <>
    <div className={style.home}>
    <div >{/*Navbar*/}
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="//">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Info">Mi Perfil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/myQr">QR</a>
        </li>
      </ul>
    </div>
    <div class="">Info Perfil </div>{/*Perfil*/}
    <div class="" >Menu container</div>{/*Menu */}
    </div>
    <div class="mt-5"><Footer /></div>{/*/Footer*/}
    </>
  )
}


export default Home