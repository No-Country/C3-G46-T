import React from 'react';
import style from "./Maps.module.css"
import Iframe from 'react-iframe'
import Footer from "../Footer/Fotter"


const Maps = () => {
  return (
    <div className={style.logo}>
    <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>    
          <div>Cerca Mio</div>
     <div><Iframe
      className='mapa'
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3748719.171185856!2d-64.34272514780106!3d-34.52658506517933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sar!4v1645853496464!5m2!1ses!2sar"
      width="100%"
      height="700"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy" />
     </div>

      <Footer />
    </div>
  )
}

export default Maps;