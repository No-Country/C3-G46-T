import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../actions';
import style from "./Login.module.css"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    documento: "",
    password: "",
  })

  const handleLogin = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    dispatch(login(user))
    navigate( "/Home")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>
        <h2 className={style.loginTitle}>Inicio de sesión</h2>
        <div className={style.formLogin}>  
           <div className={style.inputConteiner}>
               <input
                 className={style.formControl}
                 onChange={handleLogin}
                 value={user.documento}
                 name='documento'
                 type="tel"
                 required
                 minlength="7"
                 maxlength="8"
                 placeholder='Nro. de documento'/>
               <input
                 className={style.formControl}
                 onChange={handleLogin}
                 value={user.password}
                 name='password'
                 type="password"
                 required
                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 placeholder='Contraseña'/>
          </div>
             <button onChange={handleSubmit} type="submit" className={style.btnPrim}>Iniciar sesión</button>
             <a href='/ForgotPassword' className={style.linkRestaurar}>
                <p className={style.textRestaurar} >¿Olvidaste tu contraseña?
                </p></a>
        </div>
        {/* <div class="form-loggin-password">
        </div> */}
      </form>
    </div>
  )
}

export default Login