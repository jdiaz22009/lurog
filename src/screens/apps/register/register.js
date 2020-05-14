import React, { useState, useEffect } from 'react'
import styles from './styles'

import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import google from 'assets/img/GoogleR.png'
import facebook from 'assets/img/FaceR.png'
import Frontal from 'assets/img/Frontal.png'

import CheckBox from 'components/shared/check/check'
import VirtualList from 'components/shared/virtualList/virtualList'
import Button from 'components/shared/button/button'

import FormInput from 'components/auth/formInput/formInput'
import TextError from 'components/auth/textError/textError'


import { getCategory } from 'helpers/api/auth'


const initForm = {
  name: '',
  last_name: '',
  email: '',
  identification: 0,
  password: '',
  isProfesional: false,
  isPropietario: false,
  categoryProfession: ''
}

const formOptions = [
  {
    name: 'name',
    mode: 'text',
    textName: 'Nombre',
    placeholder: 'Ingrese su nombre',
    msgError: 'Ingrese un nombre',
    validate: false,
    showError: false,
    keyboardType: 'default'
  },
  {
    name: 'last_name',
    mode: 'text',
    textName: 'Apellido',
    placeholder: 'Ingrese su apellido',
    msgError: 'Ingrese un apellido',
    validate: false,
    showError: false,
    keyboardType: 'default'
  },
  {
    name: 'adress',
    mode: 'text',
    textName: 'Direccion',
    placeholder: 'Ingrese una direccion',
    msgError: 'Ingrese una direccion válido',
    validate: false,
    showError: false,
    keyboardType: 'default'
  },
  {
    name: 'city',
    mode: 'text',
    textName: 'Ciudad',
    placeholder: 'Ingrese una ciudad',
    msgError: 'Ingrese una ciudad válido',
    validate: false,
    showError: false,
    keyboardType: 'default'
  },
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
    name: 'celular',
    mode: 'text',
    textName: 'Celular',
    placeholder: 'Ingrese su celular',
    msgError: 'Ingrese un celular válido',
    validate: false,
    showError: false,
    keyboardType: 'numeric'
  },
  {
    name: 'password',
    mode: 'password',
    textName: 'Contraseña',
    placeholder: 'Ingrese una contraseña',
    msgError: 'Ingrese una contraseña validad',
    validate: false,
    showError: false,
    keyboardType: 'default'
  },
]


const Register = () => {

  const [checkValuesUP, setCheckValueUP] = useState(false)
  const [checkValuesPS, setCheckValuePS] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [visiblePassword, setVisiblePassword] = useState(false)

  const [dataCategory, setDataCategory] = useState([])
  const [category, setCategory] = useState('Categoria de tu profesion')

  const [formData, setFormData] = useState(initForm)
  const [formOpt, setFormOpt] = useState(formOptions)

  useEffect(() => {
    getCategorys()
  }, [])

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

  const onVisible = () => {
    setVisibleModal(true)
  }
  const onClose = () => {
    setVisibleModal(false)
  }

  const getCategorys = async () => {
    try {
      const res = await getCategory()
      if (res['data']['code'] === 200) {
        setDataCategory(res['data']['data'])
      }
    } catch (error) {
      throw error
    }
  }

  const onPressSelect = (data) => {
    setCategory(data.name)
    onClose()
  }

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
      <ScrollView style={styles.containerScroll}>
        <KeyboardAwareScrollView>
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

            <View style={styles.contentVirtualList}>
              <TouchableOpacity style={styles.btnSelect} onPress={() => onVisible()}>
                <Text style={styles.textBtn}>{category}</Text>
              </TouchableOpacity>

              {visibleModal &&
                <VirtualList
                  visibleModal={visibleModal}
                  dataSource={dataCategory}
                  onPress={(data) => onPressSelect(data)}
                  onClose={() => onClose()}
                />
              }
            </View>

            <View style={styles.contentForm}>
              {formBuild()}
            </View>
            {checkValuesUP &&
              <View style={styles.contentCameraCedula}>
                <Text style={styles.textCameraDo}>Cédula de Ciudadanía</Text>
                <TouchableOpacity style={styles.imgDoc}>
                  <Text style={styles.textDoc}>Frontal</Text>
                  <Image source={Frontal} style={styles.docImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgDoc}>
                  <Text style={styles.textDoc}>Trasera</Text>
                  <Image source={Frontal} style={styles.docImg} />
                </TouchableOpacity>
              </View>
            }


            {checkValuesPS &&
              <View>
                <View style={styles.contentCameraCedula}>
                  <Text style={styles.textCameraDo}>Registro Médico</Text>
                  <TouchableOpacity style={styles.imgDoc}>
                    <Text style={styles.textDoc}>Frontal</Text>
                    <Image source={Frontal} style={styles.docImg} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.imgDoc}>
                    <Text style={styles.textDoc}>Trasera</Text>
                    <Image source={Frontal} style={styles.docImg} />
                  </TouchableOpacity>
                </View>


                <View style={styles.contentCameraCedula}>
                  <Text style={styles.textCameraDo}>Diploma Profesional</Text>
                  <TouchableOpacity style={styles.imgDoc}>
                    <Text style={styles.textDoc}>Frontal</Text>
                    <Image source={Frontal} style={styles.docImg} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.imgDoc}>
                    <Text style={styles.textDoc}>Trasera</Text>
                    <Image source={Frontal} style={styles.docImg} />
                  </TouchableOpacity>
                </View>
              </View>
            }
            <View style={styles.btnContinue}>
              <Button
                text={'Continuar'}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  )

}

export default Register
