import React from 'react'
import styles from './styles'

import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'

import google from 'assets/img/GoogleR.png'
import facebook from 'assets/img/FaceR.png'
import Frontal from 'assets/img/Frontal.png'

//import CheckBox from 'components/shared/checkBox/checkBox'


const Register = () => {


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

        <View>
          
        </View>
      </View>
    </SafeAreaView>
  )

}

export default Register
