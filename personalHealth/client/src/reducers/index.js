import {GET_USER, LOGIN, POST_USER} from "../actions/index"

const initialState = { 
  user: {},
  users: []
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case GET_USER:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer