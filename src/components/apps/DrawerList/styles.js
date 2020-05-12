import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  listContainer: {    
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  button: {
    marginVertical: normalize(16),
    marginStart: normalize(14) 
  },
  btnText:{
    fontSize: normalize(13),
    fontFamily: 'Roboto-Regular'
  }
})

export default styles