import React from 'react';
import style from "./Login.module.css"
const Login = () => {
  return (
    <div>
      <form>
        <a href='/Home'> <div className={style.linkAtras}> ◀ Atrás</div></a>
        <h2 className={style.loginTitle}>Inicio de sesión</h2>
        <div className={style.formLogin}>  
           <div className={style.inputConteiner}>
               <input type="tel" required minlength="7" maxlength="8" className={style.formControl} placeholder='Nro. de documento'/>
                <input type="password" className={style.formControl} id="exampleInputPassword1" placeholder='Contraseña'/>
          </div>
             <button type="submit" className={style.btnPrim}>Iniciar sesión</button>
             <a href='/ForgotPassword'> <div className={style.linkRestaurar} >¿Olvidaste tu contraseña?</div></a>
        </div>
        {/* <div class="form-loggin-password">
        </div> */}
      </form>
    </div>
  )
}

export default Login