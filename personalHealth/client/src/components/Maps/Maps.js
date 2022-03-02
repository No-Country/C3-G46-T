import React from 'react';
import style from "./Maps.module.css"
import Iframe from 'react-iframe'
import Footer from "../Footer/Fotter"


const Maps = () => {
  return (
    <div className={style.logo}>
     <a href='/Home'> <div> ◀  Atrás</div></a>
     <div>Cerca Mio</div>
     <div><Iframe
      className='mapa'
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3748719.171185856!2d-64.34272514780106!3d-34.52658506517933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sar!4v1645853496464!5m2!1ses!2sar"
      width="420"
      height="550"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy" />
     </div>

      <Footer />
    </div>
  )
}

export default Maps;