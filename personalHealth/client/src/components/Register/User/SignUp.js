import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { crearUsuario } from '../../../actions';
import style from "./SignUp.module.css"

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    documento: "",
    names: "",
    lastname: "",
    password: "",
    email: "",
    sex: "",
    adress: "",
    phone: "",
    healthprovider: "",
    admin: false
  })

  const handleSignup = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    dispatch(crearUsuario(user))
    navigate( "/Login")
  }

  return (
    <div>
      <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg> Atrás</div></a>
      <h2 className={style.title}>Registrate</h2>
      <form onSubmit={handleSubmit} className={style.formRegister}>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={user.documento}
            name='documento'
            type="tel"
            required
            minlength="7"
            maxlength="8"
            placeholder='Nro. de documento' />
        </div>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={user.names}
            name='names'
            type="text"
            minlength="1"
            maxlength="28"
            placeholder='Nombre/s' />
        </div>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={user.lastname}
            name='lastname'
            type="text"
            minlength="1"
            maxlength="18"
            placeholder='Apellido/s' />
        </div>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={user.email}
            name='email'
            type="email"
            required 
            id="InputEmail1" 
            aria-describedby="emailHelp"
            placeholder='E-mail' />
        </div>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={user.password}
            name='password'
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            placeholder='Contraseña'
            title="Debe incluir letra mayúscula, minúscula y número, y al menos 8 caracteres"></input>
        </div>
        <div className={style.inputConteiner}>
          <input className={style.formControl} type="password" id="InputPassword1" placeholder='Repetir contraseña' />
        </div>
        <HCaptcha sitekey="d5959e8e-93a5-49bf-89b5-35dbcf4657c7" />
        <button type="submit" onClick={ handleSubmit} className={style.btnPrim} >Crear cuenta</button>
        <br />
        <a href='./TerminosCondiciones'><button type="button" class="btn btn-outline-secondary"> Terminos y Condiciones</button></a>
      </form>
    </div>
  )
}

export default SignUp