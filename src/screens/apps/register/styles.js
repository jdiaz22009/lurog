
import { StyleSheet } from 'react-native'

import { COLOR_LETRA_INICIO } from 'utils/colors';

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  content: {
    position: 'relative',
    top: normalize(30)
  },
  containerImg: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  img: {
    width: normalize(180),
    height: normalize(45),
    padding: normalize(20),
    margin: normalize(4)
  },
  textH1: {
    fontFamily: 'Roboto-Bold',
    color: COLOR_LETRA_INICIO,
    fontSize: normalize(18),
    marginLeft: normalize(20),
    paddingBottom: normalize(15)
  },

  contentProfile: {
    paddingHorizontal: normalize(138),
    paddingVertical: normalize(40)
  },

  contentImg: {
    paddingBottom: normalize(10)
  },

  text: {
    fontFamily: 'Roboto-Bold',
    color: COLOR_LETRA_INICIO,
    fontSize: normalize(16)
  },

  containerCheck: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default styles

