import React from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const SignUp = () => {
  return (
    <div>
      <a href='/Home'> <div> ◀  Atrás</div></a>
      <form>
        <h2>Registrate</h2>
        <div class="m-1 mb-3">  
          <input type="tel" required minlength="7" maxlength="8" class="form-control" placeholder='Nro. de documento'/>
        </div>
        <div class="m-1 mb-3">  
          <input type="text" minlength="7" maxlength="8" class="form-control" placeholder='Nombre/s'/>
        </div>
        <div class="m-1 mb-3">  
          <input type="text" minlength="7" maxlength="8" class="form-control" placeholder='Apellido/s'/>
        </div>
        <div class="m-1 mb-3">  
          <input type="email" required class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder='E-mail'/>
        </div>
        <div class=" m-1 mb-3">
          <input type="password" class="form-control" required name="pw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder='Contraseña' title="Debe incluir letra mayúscula, minúscula y número, y al menos 8 caracteres"></input>
        </div>
        <div class="m-1 mb-3">
          <input type="password" class="form-control" required id="InputPassword1" placeholder='Repetir contraseña'/>
        </div>
        <HCaptcha sitekey="d5959e8e-93a5-49bf-89b5-35dbcf4657c7"/>
          <button type="submit" class=" m-1 btn btn-primary">Crear cuenta</button>
          <br/>
          <a href='./TerminosCondiciones'><button type="button" class="btn btn-outline-secondary"> Terminos y Condiciones</button></a>
      </form>
    </div>
  )
}

export default SignUp