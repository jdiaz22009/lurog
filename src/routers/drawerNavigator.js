import React from 'react'

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import Home from 'screens/apps/home/home'

import DrawerList from 'components/apps/DrawerList/DrawerList'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerList />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="inicio"
        component={Home}
        options={{ drawerLabel: 'Inicio' }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator