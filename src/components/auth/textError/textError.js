import React from 'react'
import styles from './styles'

import { View, Text } from 'react-native'

const TextError = ({ message }) => {
  return (
    <View>
      <Text style={styles.txt}>{message}</Text>
    </View>
  )
}

export default TextError
