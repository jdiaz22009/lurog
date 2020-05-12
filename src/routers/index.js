import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//import DrawerNavigator from './drawerNavigator'

import SplashScreen from 'screens/splash/splash'
import MainScreen from 'screens/main/main'
import Login from 'screens/auth/login'
import Register from 'screens/apps/register/register'

import ButtonDrawer from 'components/apps/ButtonDrawer/ButtonDrawer'

import normalize from 'react-native-normalize'

import { COLOR_LETRA_TABS, BLUE_0 } from 'utils/colors'

import Connect from 'hoc/connect.hoc';
import Home from 'screens/apps/home/home'

const Stack = createStackNavigator()
const Tap = createMaterialTopTabNavigator()
const TapBottom = createMaterialBottomTabNavigator()

const Navigator = ({ state }) => {

  const [isLoading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged()
    }, 1500)
  }, [state.user.user])

  const onAuthStateChanged = async () => {
    try {
      if (state.user.user !== null && state.user.user !== undefined) {
        setLoading(false)
        setUser(state.user.user.token)
      } else {
        setLoading(false)
        setUser(null)
      }
    } catch (error) {
      throw error
    }
  }

  const createTopTabs = () => {
    const optionsNavigator = {
      tabStyle: { height: normalize(60) },
      labelStyle: {
        fontFamily: 'Roboto-Bold',
        fontSize: normalize(15),
        color: COLOR_LETRA_TABS
      }
    }

    const optionScreenLogin = {
      tabBarLabel: 'Iniciar sesión'
    }

    const optionScreenRegister = {
      tabBarLabel: 'Registrarse'
    }

    return <Tap.Navigator tabBarOptions={optionsNavigator}>
      <Tap.Screen name="login" component={Login} options={optionScreenLogin} />
      <Tap.Screen name="register" component={Register} options={optionScreenRegister} />
    </Tap.Navigator>
  }


  const createBottomTabs = () => {
    return <TapBottom.Navigator>
      <TapBottom.Screen name="explore" component={Home} />
      <TapBottom.Screen name="offices" component={Home} />
      <TapBottom.Screen name="events" component={Home} />
    </TapBottom.Navigator>

  }


  return (
    <SafeAreaProvider>
      <NavigationContainer initialRouteName="Splash">
        {isLoading ? (
          <>
            <Stack.Navigator>
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </>
        )
          : !isLoading && user === null ?
            (
              <>
                <Stack.Navigator>
                  <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Entrada' }} />
                  <Stack.Screen name="Tabs" options={{ title: 'Inicio' }} children={createTopTabs} />
                </Stack.Navigator>
              </>
            )
            : (
              <>
                <Stack.Navigator>
                  <Stack.Screen
                    name="home"
                    children={createBottomTabs}
                    //component={DrawerNavigator}
                    options={({ navigation, route }) => (
                      {
                        title: 'Inicio',
                        headerStyle: {
                          backgroundColor: BLUE_0,
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          fontSize: normalize(20),
                          fontFamily: 'Roboto-Bold',
                        },
                        /* headerLeft: () => (
                           <ButtonDrawer />
                         ),*/
                      }
                    )}
                  />
                </Stack.Navigator>
              </>
            )
        }
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Connect(Navigator)