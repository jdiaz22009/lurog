import AsyncStorage from '@react-native-community/async-storage'

export const setItem = async (key, value) => {
  try {
    AsyncStorage.setItem(key, value).then(user => {
      console.log(user, 'setItem')
      return user
    })
  } catch (error) {
    throw error
  }
}
export const getItem = async (key) => {
  try {
    AsyncStorage.setItem(key).then((user) => {
      console.log(user, 'user')
      return user
    })
  } catch (error) {
    throw error
  }
}

export const clear = async () => {
  try {
    return await AsyncStorage.clear()
  } catch (error) {
    throw error
  }
}