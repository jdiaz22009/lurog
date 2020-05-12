import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { COLOR_BOTONES } from 'utils/colors'

const styles = StyleSheet.create({
  btn: {
    flexDirection:'column',
    justifyContent:'center',
    borderRadius: normalize(10), 
    marginLeft: normalize(-5), 
    width: normalize(334),
    height: normalize(50)
  },
  btnEnabled: {
    backgroundColor: COLOR_BOTONES,
    // opacity: 0.3,
  },
  btnDisabled: {    
    backgroundColor: COLOR_BOTONES,
    // opacity: 1,
  },
  text: {
    flexDirection:'column',
    justifyContent:'center',
    fontFamily: 'Roboto-Bold',    
    fontSize: normalize(20),
    color: '#ffff',
    textAlign: 'center'
  }
})
export default styles