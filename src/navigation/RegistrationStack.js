import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from '../screens/SplashScreen/'


const RegistrationStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: () => ({
      headerShown: false,
      gestureEnabled: false
    })
  },
})

export default RegistrationStack
