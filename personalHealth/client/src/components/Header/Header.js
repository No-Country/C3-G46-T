import React from 'react';
import style from "./Header.module.css"


const Header = () => {
  return (
      <div className={style.Header}>
        <ul className={style.navConteiner}>

            <li className={style.navItem}>
                <a className={style.linkItemNav} aria-current="page" href="/Info">Menu</a>
            </li>
            <li className={style.navItem}>
                <a className={style.linkItemNav} href="/Perfil">Mi Perfil</a>
            </li>
            <li className={style.navItem}>
                <a className={style.linkItemNav} href="/myQr">QR</a>
            </li>
        </ul>
      </div>
  )
}

export default Header;