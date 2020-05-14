import React, { useEffect, useState } from 'react'
import styles from './styles'

import { View, SafeAreaView, Modal, ScrollView, VirtualizedList, Text, TouchableOpacity } from 'react-native'

import Button from 'components/shared/button/button'

const virtualList = ({ modalVisible, dataSource, onPress, onClose }) => {


  const Item = ({ title, id }) => {
    let data = {
      name: title,
      _id: id
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPress(data)} >
        <Text style={styles.modalText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}>
          <View style={[styles.centeredView, styles.modalBackgroundStyle]}>
            <View style={styles.modalView}>
              <VirtualizedList
                data={dataSource}
                initialNumToRender={20}
                renderItem={({ item }) => <Item title={item.name} id={item._id} />}
                keyExtractor={item => item.key}
                getItemCount={data => data.length}
                getItem={(data, index) => data[index]}
              />
            </View>
            <View>
              <Button
                text={'Cancelar'}
                onPress={() => onClose()}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

export default virtualList