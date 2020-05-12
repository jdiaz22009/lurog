import { Alert } from 'react-native'

export const InfoAlert = (title, message, show) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: "Continuar",
        onPress: () => show(false),
        style: "cancel"
      },
    ],
    { cancelable: false }
  )
export const logouts = (title, message, logout) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: "Si",
        onPress: () => logout(),
        style: "cancel"
      },
      {
        text: "No",
        onPress: () => console.log('no'),
        style: "cancel"
      },
    ],
    { cancelable: false }
  )
}



