import React from 'react';
import style from "./TerminosCondiciones.module.css"

const TerminosCondiciones = () => {
  return (
    <div className={style.container}>
      <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>
       <div class="card text-center">
          <div class="card-header">
            <strong>Terminos y Condiciones</strong>
          </div>
          <div class="card-body">
            <h5 class="card-title">Terminos, condiciones y politica de Privacidad</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="card-footer text-muted">
            ® Personal Health 
          </div>
      </div>
    </div>
  )
}

export default TerminosCondiciones;