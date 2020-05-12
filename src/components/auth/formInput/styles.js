import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { COLOR_BOTONES, GRAY_0 } from 'utils/colors'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomColor: COLOR_BOTONES,
    borderBottomWidth: 2,
    width: normalize(320),
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: normalize(15),
    marginBottom: normalize(0),
  },
  textInput: {
    flex: 1,
    paddingTop: normalize(15),
    paddingRight: normalize(15),
    paddingBottom: normalize(15),
    color: GRAY_0,
    fontFamily: 'Roboto-Regular',
    fontSize: normalize(15),
  }
})

export default styles