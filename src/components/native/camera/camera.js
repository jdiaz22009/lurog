import React from 'react'
import styles from './styles'

import { View, Text, TouchableOpacity } from 'react-native'

import { RNCamera } from 'react-native-camera'

const RNcamera = ({ }) => {

  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Waiting</Text>
    </View>
  )

  const takePicture = async (camera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.takePictureAsync(options)
      console.log(data.uri)
    }
  }

  return (
    <View>
      <RNCamera
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Lurog',
          message: 'Necesitamos su permiso para usar su cámara',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Lurog',
          message: 'Necesitamos su permiso para usar su audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      >
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />
          return (
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => takePicture(camera)}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}

      </RNCamera>
    </View>
  )
}

export default RNcamera

