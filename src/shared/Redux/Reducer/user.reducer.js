import { DATA_USER } from '../Types/user.types';

const INITIAL_STATE = []

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_USER:
      return payload;
    default:
      return state;
  }
}
export default userReducer