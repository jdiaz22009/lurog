
import storage, { firebase } from '@react-native-firebase/storage'

export const uploadPicture = (data, id) => new Promise((resolve, reject) => {
  const imgRef = storage().ref(`documents/${id}`)
  const task = imgRef.putString(data, 'data_url', { contentType: 'image/jpg' })
  task.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (shapshot) => {
      console.log(shapshot, 'complete')
    },
    (e) => {
      console.error('error en', e)
      reject(e)
    },
    () => {
      imgRef.getDownloadURL().then(urlImg => {
        resolve(urlImg)
      })

    }
  )
})