import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { COLOR_LETRA_OLD } from 'utils/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    position: 'relative',
    left: normalize(25),
    top: normalize(90),
  },
  formBuilds: {
    marginBottom: normalize(50)
  },

  textContentLogin: {
    marginBottom: normalize(35)
  },

  textLogin: {
    fontFamily: 'Roboto-Bold',
    fontSize: normalize(18)
  },

  textOldP: {
    fontFamily: 'Roboto-Bold',
    fontSize: normalize(18),
    color: COLOR_LETRA_OLD
  },

  contentOldPass: {
    flexDirection: 'column',
    position: 'relative',
    top: normalize(60)
  }
})

export default styles
