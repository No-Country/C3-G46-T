import React from 'react';

const ForgotPassword = () => {
  return (
    <div>
      <form>
      <a href='/Home'> <div> ◀  Atrás</div></a>
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