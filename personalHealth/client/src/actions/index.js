import axios from "axios";

export const POST_USER = "POST_USER"
export const LOGIN = "LOGIN"
export const GET_USER = "GET_USER"
export const GET_ENTIDADES = "GET_ENTIDADES"

// ACTIONS PARA USUARIOS
export function crearUsuario(payload) {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:3001/register', payload);
     dispatch({ type: POST_USER, payload: response.data })
  }
}

export function login(payload) {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:3001/login', payload);
     dispatch({ type: LOGIN, payload: response.data })
  }
}

export function getUser() {
  return (dispatch) => {
    axios.get('http://localhost:3001/users')
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// ACTIONS PARA ENTIDADES DE SALUD

export function getEntidades() {
  return (dispatch) => {
    axios.get('http://localhost:3001/admin/entidades')
      .then((response) => {
        dispatch({
          type: GET_ENTIDADES,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}