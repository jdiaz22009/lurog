import { StyleSheet } from 'react-native'

import { COLOR_BOTONES } from 'utils/colors';

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalView: {
    margin: normalize(8),
    backgroundColor: '#fff',
    borderRadius: normalize(12),
    width: normalize(330),
    height: normalize(500),
    paddingBottom: normalize(5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: normalize(10),
      height: normalize(10)
    },
    elevation: 1,
  },
  modalText: {
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Roboto-Light',
    fontSize: normalize(13),
    textAlign: 'center',
    width: normalize(313),
    margin: normalize(4),
    position: 'relative',
    top: normalize(9)

  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: normalize(10),
    width: normalize(328),
    borderBottomWidth: normalize(2.5),
    borderBottomColor: COLOR_BOTONES,
  }
})

export default styles