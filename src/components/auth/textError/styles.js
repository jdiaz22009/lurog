import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  txt:{
    fontFamily: 'Roboto-Light',
    fontSize: normalize(13),
    color: 'red',
    textAlign: 'center',
    marginLeft: normalize(-40)
  }
})

export default styles