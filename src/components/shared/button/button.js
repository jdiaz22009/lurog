import React, { useEffect } from 'react'
import styles from './styles'

import { TouchableOpacity, Text } from 'react-native'

const Button = ({ disabled, onPress, text }) => {

  return (
    <TouchableOpacity
      disabled={disabled ? disabled : false}
      style={disabled ? { ...styles.btn, ...styles.btnDisabled } : { ...styles.btn, ...styles.btnEnabled }}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button