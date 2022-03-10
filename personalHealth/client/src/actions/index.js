import axios from "axios";

export const POST_USER = "POST_USER"
export const LOGIN = "LOGIN"


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