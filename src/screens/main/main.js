import React from 'react'
import styles from './styles'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import logo from 'assets/img/logo.png'
import email from 'assets/img/emai.png'
import facebook from 'assets/img/facebook.png'
import google from 'assets/img/google.png'


const MainScreen = ({ navigation }) => {

  const goEmail = () => {
    navigation.push('Tabs')
  }


  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.contaText}>
        <Text style={styles.textBold}>
          Bienvenido a LUROG
        </Text>

        <Text style={styles.text}>
          Unete a la cominidad de arrendatarios y usuarios en colombia
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => goEmail()}
        >
          <Image source={email} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={facebook} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={google} style={styles.img} />
        </TouchableOpacity>
      </View>

      <View style={styles.textAccount}>
        <Text style={styles.colorLink}>
          No tienes una cuenta? inscríbete
      </Text>
      </View>
    </View>
  )

}

export default MainScreen