import React from 'react';
import Footer from '../Footer/Fotter';
import NavModal from '../Register/NavModal/NavModal';
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
    <NavModal />
    <div className={style.home}>
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
      <Footer />
    </div>
    </>
  )
}

export default Home