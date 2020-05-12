import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { COLOR_LETRA_LINK, COLOR_LETRA_INICIO } from 'utils/colors';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  logo: {
    position: 'relative',
    top: normalize(-20),
    width: normalize(200),
    height: normalize(200),
  },

  contaText: {
    position: 'relative',
    top: normalize(-30)
  },

  textBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: normalize(20),
    position: 'relative',
    right: normalize(10),
    color: COLOR_LETRA_INICIO,
    marginBottom: normalize(20),
  },

  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: normalize(18),
    position: 'relative',
    color: COLOR_LETRA_INICIO,
    right: normalize(10)
  },

  img: {
    position: 'relative',
    top: normalize(-50),
    marginBottom: normalize(20),
    width: normalize(300),
    height: normalize(48),
  },

  textAccount: {
    position: 'relative',
    right: normalize(60),
    top: normalize(-70)
  },

  colorLink: {
    color: COLOR_LETRA_LINK,
    fontFamily: 'Roboto-Bold',
  }

})

export default styles