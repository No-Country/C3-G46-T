import {LOGIN, POST_USER} from "../actions/index"

const initialState = { 
  user: {}
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
    default:
      return state;
  }
}

export default rootReducer