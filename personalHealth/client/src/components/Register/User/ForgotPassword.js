import React from 'react';
import style from "./ForgotPassword.module.css"

const ForgotPassword = () => {
  return (
    <div>
      <form>
      <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>
       <h2>Recupero Contraseña</h2>
        <div class="m-1 mb-3">
          <input type="tel" required minlength="7" maxlength="8" class="form-control" placeholder='Nro. de documento'/>
        </div>
        <div class="m-1 mb-3">
        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder='E-mail'/>
        </div>
          <button type="submit" class="m-1 btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default ForgotPassword