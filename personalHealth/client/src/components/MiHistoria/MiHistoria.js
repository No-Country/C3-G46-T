import React, {useState, useEffect} from 'react';
import Footer from '../Footer/Fotter';
import Header from '../Header/Header';
import style from "./MiHistoria.module.css";

const MiHistoria = () => {
    return(
        <>
        <div className={style.Header} ><Header /></div>{/*Navbar*/}
        <div className={style.ContainerStories}> Antescedentes
            
            </div>
        <div className={style.ContainerStories}> Antecedentes Heredofamiliares
            </div>
        <div className={style.ContainerStories}> Exámenes Complementarios
            </div>
        <div className={style.ContainerStories}> Intervenciones
            </div>
        <div class="mt-5"><Footer /></div>{/*/Footer*/}
        </>
    )
}

export default MiHistoria