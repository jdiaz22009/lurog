import { CONFIG } from 'utils/config'
import { request } from '../client'

export const signIn = async (params) => {
  try {
    const data = {
      url: CONFIG.apiUrl + CONFIG.paths.login,
      params
    }
    return await request('POST', data, null)
  } catch (error) {
    throw error
  }

}
export const getCategory = async () => {
  try {
    const data = {
      url: CONFIG.apiUrl + CONFIG.paths.getCategory
    }
    return await request('GET', data, null)
  } catch (error) {
    throw error
  }

}