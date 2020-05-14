
import { StyleSheet } from 'react-native'

import { COLOR_LETRA_INICIO } from 'utils/colors';

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: normalize(30)
  },
  content: {
    position: 'relative',
    top: normalize(20),
    marginBottom: normalize(79)
  },

  containerImg: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: normalize(180),
    height: normalize(45),
    padding: normalize(0),
    margin: normalize(4)
  },
  textH1: {
    fontFamily: 'Roboto-Bold',
    color: COLOR_LETRA_INICIO,
    fontSize: normalize(18),
    marginLeft: normalize(20),
    paddingBottom: normalize(10)
  },

  contentProfile: {
    paddingHorizontal: normalize(138),
    paddingVertical: normalize(40)
  },

  contentImg: {
    position: 'relative',
    top: normalize(-25)
  },

  text: {
    fontFamily: 'Roboto-Bold',
    color: COLOR_LETRA_INICIO,
    fontSize: normalize(16)
  },

  containerCheck: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: normalize(20),
    position: 'relative',
    top:  normalize(-50)
  },

  btnSelect: {
    borderBottomWidth: 3,
    borderBottomColor: '#6B6B6B',
    width: normalize(320),
    marginLeft: normalize(28)
  },

  textBtn: {
    fontFamily: 'Roboto-Bold',
    color: '#6B6B6B',
    fontSize: normalize(15),
    paddingBottom: normalize(10)
  },

  contentVirtualList: {
    marginTop: normalize(-50),
    paddingBottom: normalize(10)
  },
  contentForm: {
    flexDirection: 'column',
    alignContent: 'center',
    marginLeft: normalize(27)
  },

  formBuilds: {
    marginBottom: normalize(0),
  },

  contentCameraCedula: {
    flex: 4,
    flexDirection: 'row',
    alignContent: 'space-around',
    paddingBottom: normalize(33)
  },

  docImg: {
    width: normalize(58),
    height: normalize(58),
    margin: normalize(8)
  },

  imgDoc: {
    position: 'relative',
    left: normalize(-15),
    top: normalize(11),
    paddingLeft: normalize(12)
  },

  textDoc: {
    flexDirection: 'column',
    alignContent: 'center',
    fontFamily: 'Roboto-Bold',
    color: '#6B6B6B',
    position: 'relative',
    left: normalize(12)
  },
  textCameraDo: {
    fontFamily: 'Roboto-Bold',
    color: '#6B6B6B',
    fontSize: normalize(15),
    height: normalize(25),
    width: normalize(170),
    marginLeft: normalize(28),
    marginTop: normalize(50)
  },

  btnContinue: {
    marginLeft: normalize(25),
    marginTop:  normalize(10),

  }
})

export default styles

