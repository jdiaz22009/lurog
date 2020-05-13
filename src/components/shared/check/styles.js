import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { COLOR_LETRA_INICIO } from 'utils/colors'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: normalize(13)
  },
  check: {
    width: normalize(60),
    height: normalize(30),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  text: {
    alignContent: 'center',
    flexDirection: 'column',
    fontSize: normalize(14),
    marginLeft: normalize(20),
    paddingBottom: normalize(13),
    color: COLOR_LETRA_INICIO,
    fontFamily: 'Roboto-Bold'
  }
})

export default styles