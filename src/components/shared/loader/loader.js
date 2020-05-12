import React from 'react'
import styles from './styles'

import { Modal, View, ActivityIndicator } from 'react-native'

import { COLOR_BOTONES } from 'utils/colors'

const Loader = ({ show }) => (
  <Modal
    animationType="none"
    transparent
    visible={show}>

    <View style={styles.modalContainer}>
      <ActivityIndicator
        animating={show}
        size="large"
        color={COLOR_BOTONES} />
    </View>

  </Modal>
)

export default Loader