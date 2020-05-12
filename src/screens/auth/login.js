import React, { useState } from 'react'
import styles from './styles'

import { View, Text, SafeAreaView } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { validateEmail, validatePassword, validateText } from 'utils/utils'

import Button from 'components/shared/button/button'
import { InfoAlert } from 'components/shared/alerts/infoAlert/infoAlert'
import Loader from 'components/shared/loader/loader'

import FormInput from 'components/auth/formInput/formInput'
import TextError from 'components/auth/textError/textError'

import { signIn } from 'helpers/api/auth'

import Connect from 'hoc/connect.hoc'

import { DATA_USERS } from 'shared/Redux/Actions/user.actions'


const initForm = {
  email: '',
  password: ''
}

const formOptions = [
  {
    name: 'email',
    mode: 'text',
    textName: 'Email',
    placeholder: 'Email',
    msgError: 'Ingrese un email válido',
    validate: false,
    showError: false,
    keyboardType: 'email-address'
  },
  {
    name: 'password',
    mode: 'password',
    textName: 'Contraseña',
    placeholder: 'Contraseña',
    msgError: 'La contraseña debe contener 6 dígitos y una mayúscula',
    validate: false,
    showError: false,
    keyboardType: 'default'
  }
]



const Login = ({ dispatch }) => {

  const [visiblePassword, setVisiblePassword] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [showLoader, setShowLoader] = useState(false)

  const [formData, setFormData] = useState(initForm)
  const [formOpt, setFormOpt] = useState(formOptions)

  const verifyValidations = () => {
    if (formOpt.every((item) => item.validate)) {
      console.log('all validate success')
      setBtnDisabled(false)
      return
    }
    console.log('no validate')
    if (!btnDisabled) {
      setBtnDisabled(true)
    }
  }

  const updateFormOpt = (index, showError, validate) => {
    let formOptAux = [...formOpt]
    formOptAux[index].showError = showError
    formOptAux[index].validate = validate
    setFormOpt(formOptAux)
  }

  const validateTextInput = (item, index) => {
    if (item.name === 'email') {
      if (!validateEmail(formData[item.name])) {
        return updateFormOpt(index, true, false)
      } else if (item.name === 'password') {
        if (!validatePassword(formData[item.name])) {
          return updateFormOpt(index, true, false)
        }
      } else {
        if (!validateText(formData[item.name])) {
          return updateFormOpt(index, true, false)
        }
      }
    }
    updateFormOpt(index, false, true)
    verifyValidations()
  }

  const hiddeLoader = (show) => {
    setShowLoader(show)
  }

  const signInUser = async () => {
    try {
      setShowLoader(true)
      const login = await signIn(formData)
      if (login['data']['code'] === 404) {
        InfoAlert('Información', login['data']['message'], (value) => { hiddeLoader(value) })
      } else {
        setShowLoader(false)
        let user_data = {
          token: login['data']['token'],
          sub: login['data']['data']['_id'],
          email: login['data']['data']['email'],
          name: login['data']['data']['name'],
          last_name: login['data']['data']['last_name'],
          identification: login['data']['data']['identification']
        }
        dispatch(DATA_USERS(user_data))
      }
    } catch (error) {
      setShowLoader(false)
      throw error
    }
  }

  const formBuild = () => {
    return formOptions.map((item, index) => {
      return (
        <View key={index} style={styles.formBuilds} >
          <FormInput
            mode={item.mode}
            nameText={item.textName}
            visiblePassword={visiblePassword}
            name={item.name}
            keyboardType={item.keyboardType}
            value={formData[`item.name`]}
            onChangeText={text => {
              setFormData({ ...formData, [item.name]: text })
              validateTextInput(item, index)
            }}
          />

          {item.showError &&
            <TextError
              message={item.msgError}
            />
          }
        </View>
      )
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.formContainer}>
          <View style={styles.textContentLogin}>
            <Text style={styles.textLogin}>
              Iniciar sesion para continuar
            </Text>
          </View>
          <View>
            {formBuild()}
          </View>

          <View>
            <Button
              onPress={() => signInUser()}
              disabled={btnDisabled}
              text={`Iniciar Sesión`}
            />
          </View>

          <View style={styles.contentOldPass}>
            <Text style={styles.textOldP}>
              Olvido contraseña?
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <Loader
        show={showLoader}
      />
    </SafeAreaView>
  )
}

export default Connect(Login)