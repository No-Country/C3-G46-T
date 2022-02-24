import React from 'react';

const UpdateProfile = () => {
  return (
    <div>
      <form>
        <h2>Actualizar Perfil</h2>
        <div class="m-1 mb-3">  
          <input type="tel" minlength="7" maxlength="8" class="form-control" placeholder='Nro. de documento'/>
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
          <button type="submit" class=" btn btn-primary">Actualizar</button>
      </form>
    </div>
  )
}

export default UpdateProfile