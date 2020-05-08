import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import DrawerNavigator from './drawerNavigator'

import SplashScreen from 'screens/splash/splash'
import MainScreen from 'screens/main/main'

const Stack = createStackNavigator()

const Navigator = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer initialRouteName="Splash">
        { /* <>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </>*/
        }
        <>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={MainScreen} />
          </Stack.Navigator>
        </>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Navigator