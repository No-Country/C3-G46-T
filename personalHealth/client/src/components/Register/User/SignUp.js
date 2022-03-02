import React from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import style from "./SignUp.module.css"

const SignUp = () => {
  return (
    <div>
      <a href='/Home'> <div> ◀  Atrás</div></a>
        <h2 className={style.title}>Registrate</h2>
      <form className={style.formRegister}>
        <div className={style.inputConteiner}>  
          <input type="tel" required minlength="7" maxlength="8" className={style.formControl} placeholder='Nro. de documento'/>
        </div>
        <div className={style.inputConteiner}>  
          <input type="text" minlength="7" maxlength="8" className={style.formControl} placeholder='Nombre/s'/>
        </div>
        <div className={style.inputConteiner}>  
          <input type="text" minlength="7" maxlength="8" className={style.formControl} placeholder='Apellido/s'/>
        </div>
        <div className={style.inputConteiner}>  
          <input type="email" required id="InputEmail1" aria-describedby="emailHelp" className={style.formControl} placeholder='E-mail'/>
        </div>
        <div className={style.inputConteiner}>
          <input type="password" required name="pw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className={style.formControl} placeholder='Contraseña' title="Debe incluir letra mayúscula, minúscula y número, y al menos 8 caracteres"></input>
        </div>
        <div className={style.inputConteiner}>
          <input type="password" required id="InputPassword1" className={style.formControl} placeholder='Repetir contraseña'/>
        </div>
        <HCaptcha sitekey="d5959e8e-93a5-49bf-89b5-35dbcf4657c7"/>
          <button type="submit" className={style.btnPrim} >Crear cuenta</button>
          <br/>
          <a href='./TerminosCondiciones'><button type="button" class="btn btn-outline-secondary"> Terminos y Condiciones</button></a>
      </form>
    </div>
  )
}

export default SignUp