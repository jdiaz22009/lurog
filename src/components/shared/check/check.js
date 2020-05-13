import React from 'react'
import styles from './styles'

import { Image, Text, TouchableOpacity, View } from 'react-native'

//import Round from 'assets/images/check-round.png'
//import RoundActive from 'assets/images/check-round-active.png'
import Square from 'assets/img/check-square.png'
import SquareActive from 'assets/img/check-square-active.png'

const Check = ({ mode, check, title, click }) => {

  const getIcon = () => {
    if (mode == 'square') {
      if (check) {
        return SquareActive
      } else {
        return Square
      }
    }

    /*else if(mode === 'round'){
      if(check){
        return RoundActive
      }else{
        return Round
      }
    }*/
  }
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity
        onPress={() => click()}>
        <Image source={getIcon()} style={styles.check} />
      </TouchableOpacity>
    </View>
  )
}



export default Check