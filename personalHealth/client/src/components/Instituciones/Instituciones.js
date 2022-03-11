import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEntidades } from "../../actions";
import Footer from "../Footer/Fotter";

const Instituciones = () => {
    const entidades = useSelector(state => state.entidades)
    const dispatch = useDispatch();
  
    useEffect( () => {
      console.log(entidades)
      dispatch(getEntidades());
    },[])

  return ( 
    <div>
        <a href='/Home' > <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg> Atrás</div></a>
      Buscar: <input 
                class="form-control" 
                type="text"
                placeholder="Buscar por nombre..."
                aria-label="readonly input example" 
                />
                {entidades&&entidades?.map ( ent => ( 
        <table class="table caption-top">
    <caption></caption>
    <thead>
        <tr>
        <th class="table-primary" scope="col"></th>
        <th class="table-primary" scope="col">Nombre</th>
        <th class="table-primary" scope="col">Dirección</th>
        <th class="table-primary" scope="col">Especialidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">{ent.matric}</th>
        <td>{ent.name}</td>
        <td>{ent.adress}</td>
        <td>{ent.specialties}</td>
        </tr>      
    </tbody>
    </table> ))}
    <Footer />
    </div>
  )
}

export default Instituciones;