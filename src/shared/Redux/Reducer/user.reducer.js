import { DATA_USER, LOGOUT } from '../Types/user.types';

const INITIAL_STATE = {
  user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_USER:
      return { ...state, user: payload }
    case LOGOUT:
      return { ...state, user: null }
    default:
      return state;
  }
}
export default userReducer