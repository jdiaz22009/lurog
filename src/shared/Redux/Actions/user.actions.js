import { DATA_USER, LOGOUT } from '../Types/user.types'

export const DATA_USERS = (data) => {
  return {
    type: DATA_USER,
    payload: data
  }
}

export const USERS_LOGOUT = () => {
  return {
    type: LOGOUT
  };
}