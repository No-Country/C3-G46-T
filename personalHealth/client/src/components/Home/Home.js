import React, {useState, useEffect} from 'react';
import Footer from '../Footer/Fotter';
import Header from '../Header/Header';
import NavModal from '../Register/NavModal/NavModal';
import style from "./Home.module.css";


const Home = () => {
  
  return (
    <>
    <div className={style.home}>
        <div className={style.Header} ><Header /></div>{/*Navbar*/}
        <div className={style.profile}>{/*Perfil*/}
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          <div>
            <h4 className={style.ProfileName}>Nombre: Pepa</h4>   {/*Ligar al back para que de la data correspondiente*/}
            <h4 className={style.ProfileDNI}>DNI: 35642372</h4>
          </div>
        </div>
        <div className={style.MenuContainer} >{/*Menu */}
        <a  className={style.link} href='/Calendar'> 
            <div className={style.Options}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3F6099" class="bi bi-calendar-heart-fill" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
              </svg>
              Agenda de turnos
            </div></a>
          <a className={style.link} href=''>
             <div className={style.Options}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"fill="#3F6099" class="bi bi-search-heart-fill" viewBox="0 0 16 16">
                  <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                </svg>
                Buscar Profesional/Institución
            </div></a>
          <a className={style.link} href='/Maps'>
             <div className={style.Options}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#3F6099" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          ¿Qué tengo cerca?
            </div></a>
        </div>
    </div>
    <div class="mt-5"><Footer /></div>{/*/Footer*/}
    </>
  )
}


export default Home