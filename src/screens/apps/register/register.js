import React, { useState } from 'react'
import styles from './styles'

import { View, Text, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native'

import google from 'assets/img/GoogleR.png'
import facebook from 'assets/img/FaceR.png'
import Frontal from 'assets/img/Frontal.png'

import CheckBox from 'components/shared/check/check'

const Register = () => {

  const [checkValuesUP, setCheckValueUP] = useState(false)
  const [checkValuesPS, setCheckValuePS] = useState(false)

  const checkValue = (mode) => {
    if (mode === 'UP') { // usuario propietario
      if (!checkValuesUP) {
        setCheckValueUP(true)
      } else {
        setCheckValueUP(false)
      }
    } else if (mode === 'PS') { // usuario propietario de salud
      if (!checkValuesPS) {
        setCheckValuePS(true)
      } else {
        setCheckValuePS(false)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textH1}>Unete a la comunidad LUROG</Text>

        <View style={styles.containerImg}>
          <TouchableOpacity >
            <Image source={facebook} style={styles.img} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={google} style={styles.img} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentProfile}>
          <TouchableOpacity style={styles.contentImg}>
            <Image source={Frontal} />
            <Text style={styles.text} >Foto de perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCheck}>
          <CheckBox
            mode="square"
            title={'Soy usuario propietario'}
            check={checkValuesUP}
            click={() => checkValue('UP')}
          />
          <CheckBox
            mode="square"
            title={'Soy usuario profesional de la salud'}
            check={checkValuesPS}
            click={() => checkValue('PS')}
          />
        </View>

        <View>
        </View>
      </View>
    </SafeAreaView>
  )

}

export default Register
