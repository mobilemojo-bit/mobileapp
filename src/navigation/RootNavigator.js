import React, { useState, useEffect, useRef } from 'react'
import { 
  createSwitchNavigator, 
  createAppContainer,
  StackActions, 
  NavigationActions,
} from 'react-navigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { 
  ActivityIndicator,
  ImageBackground,
  Text, 
  Alert,
  View,
  PanResponder,
} from 'react-native'

import MainNavigator from './MainNavigator'
import RegistrationStack from './RegistrationStack'

import * as pushNotifications from '../services/pushNotifications'

import theme from '../theme'


const createRootNavigator = (signedIn = false) =>
  createSwitchNavigator(
    {
      MainApp: MainNavigator,
      Registration: RegistrationStack,
    },
    {
      initialRouteName: (signedIn ? 'MainApp' : 'Registration')
    }
  )

const RootNavigator = () => {
  const [signedIn, setSignedIn] = useState(false)

  const appNavigator = useRef(false)
  const timerId = useRef(false)
  

  useEffect(() => {
    const getSignedIn = async () => {

      // await pushNotifications.configure()
            
      setSignedIn(false)
    }
    
    getSignedIn()
  })

  // ***************************************************

  const switchNavigator = createRootNavigator(signedIn)
  
  const RootNavigatorComponent = createAppContainer(    
    switchNavigator
  )

  return (
    <View style={{ flex: 1 }} >
      <RootNavigatorComponent 
        ref={nav => {          
          appNavigator.current = nav          
        }}
      />
    </View>
  )
}

export default RootNavigator
