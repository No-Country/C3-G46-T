import React from 'react';
import style from "./Header.module.css"


const Header = () => {
  return (
      <div className={style.Header}>
        <ul className={style.navConteiner}>

            <li className={style.navItem}>
                <a className={style.linkItemNav} aria-current="page" href="//">Menu</a>
            </li>
            <li className={style.navItem}>
                <a className={style.linkItemNav} href="/Info">Mi Perfil</a>
            </li>
            <li className={style.navItem}>
                <a className={style.linkItemNav} href="/myQr">QR</a>
            </li>
        </ul>
      </div>
  )
}

export default Header;