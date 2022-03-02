import React from 'react';
import style from "./TerminosCondiciones.module.css"

const TerminosCondiciones = () => {
  return (
    <div className={style.container}>
       <div class="card text-center">
          <div class="card-header">
            Terminos y Condiciones
          </div>
          <div class="card-body">
            <h5 class="card-title">Terminos, condiciones y politica de Privacidad</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="card-footer text-muted">
            ® Personal Health 
          </div>
      </div> 
      <div> <a href='/Home'> ◀  Volver</a></div>
    </div>
  )
}

export default TerminosCondiciones;