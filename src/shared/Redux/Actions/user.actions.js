import { DATA_USER } from '../Types/user.types'

export const DATA_USER = (data) => {
  return {
    type: VIEW_USER,
    payload: data
  }
}