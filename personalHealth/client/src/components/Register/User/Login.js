import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <a href='/Home'> <div> ◀  Atrás</div></a>
        <h2>Inicio de sesión</h2>
        <div class="form-floating m-1 mt-5 mb-3">  
          <input type="tel" required minlength="7" maxlength="8" class="form-control" placeholder='Nro. de documento'/>
        </div>
        <div class="form-floating m-1 mb-5">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Contraseña'/>
        </div>
          <button type="submit" class="m-1 mb-5 btn btn-primary">Iniciar sesión</button>
          <a href='/ForgotPassword'> <div class="m-1 text-primary text-opacity-75" >¿Olvidaste tu contraseña?</div></a>
      </form>
    </div>
  )
}

export default Login