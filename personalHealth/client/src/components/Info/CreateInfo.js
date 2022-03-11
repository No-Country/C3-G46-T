import React, { useState} from 'react';
import {useDispatch} from 'react-redux';
import { crearInfo } from '../../actions';
import style from "./CreateInfo.module.css"

const CreateInfo = () => {
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    fecha: "",
    blood: "",
    allergies: "",
    donor: "",
    chronicdisease: "",
    infoimportant: "",
  })

  const handleSignup = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(info)
    dispatch(crearInfo(info))
    setInfo({
      fecha: "",
      blood: "",
      allergies: "",
      donor: "",
      chronicdisease: "",
      infoimportant: "",
    })
  }

  return (
    <div>
      <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg> Atrás</div></a>
      <h2 className={style.title}>Crear Información Pública</h2>
      <form onSubmit={handleSubmit} className={style.formRegister}>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={info.fecha}
            name='fecha'
            type="text"
            required
            minlength="6"
            maxlength="10"
            placeholder='Fecha' />
        </div>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={info.blood}
            name='blood'
            type="text"
            minlength="1"
            maxlength="28"
            placeholder='Enfermedades' />
        </div>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={info.allergies}
            name='allergies'
            type="text"
            minlength="1"
            maxlength="18"
            placeholder='Alergias' />
            <input
            className={style.formControl}
            onChange={handleSignup}
            value={info.donor}
            name='donor'
            type="text"
            minlength="3"
            maxlength="5"
            placeholder='Grupo sanguineo' />
        </div>
        <div className={style.inputConteiner}>
          <input
            className={style.formControl}
            onChange={handleSignup}
            value={info.chronicdisease}
            name='chronicdisease'
            type="text"
            required 
            placeholder='Enfermedades Cronicas' />
        </div>
        <div className={style.inputConteiner}>
        <input
            className={style.formControl}
            onChange={handleSignup}
            value={info.infoimportant}
            name='infoimportant'
            type="text"
            required 
            placeholder='Otra info importante' />
        </div>
        <button type="submit" onClick={ handleSubmit} className={style.btnPrim} >Crear info</button>
        <br />
        <a href='./TerminosCondiciones'><button type="button" class="btn btn-outline-secondary"> Terminos y Condiciones</button></a>
      </form>
    </div>
  )
}

export default CreateInfo