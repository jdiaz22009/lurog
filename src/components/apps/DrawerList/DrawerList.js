import React, { useState } from 'react'
import styles from './styles'

import { View, TouchableOpacity, Text } from 'react-native'

import { logouts } from 'components/shared/alerts/infoAlert/infoAlert'

import Connect from 'hoc/connect.hoc'

import { USERS_LOGOUT } from 'shared/Redux/Actions/user.actions'


const DrawerList = ({ dispatch }) => {

  const [showAlert, setShowAlert] = useState(false)

  const logout = async () => {
    logouts('Cerrar session', 'Esta seguro que desea salir', () => {
      dispatch(USERS_LOGOUT());
    })
  }

  return (
    <View style={styles.listContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => logout()}>
        <Text style={styles.btnText}>Salir</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Connect(DrawerList)