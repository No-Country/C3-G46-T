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
          <img  className={style.imgUser} src='https://randomuser.me/api/portraits/women/45.jpg'/>
          <div>
            <h4 className={style.ProfileName}>Nombre: Pepa</h4>   {/*Ligar al back para que de la data correspondiente*/}
            <h4 className={style.ProfileDNI}>DNI: 35642372</h4>
          </div>
        </div>
        <div className={style.MenuContainer} >{/*Menu */}
          <div className={style.Options}> <a href=''> <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-calendar2-heart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3Zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
          </svg></a>Agenda de turnos</div>
          <div className={style.Options}> <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
          </svg></a>Buscar Profesional/Institución</div>
          <div className={style.Options}> <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
          <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
          </svg></a>¿Que tengo cerca?</div>
        </div>
    </div>
    <div class="mt-5"><Footer /></div>{/*/Footer*/}
    </>
  )
}


export default Home