import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from '../screens/SplashScreen/'

import TabNavigator from './TabNavigator'

const MainNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: () => ({
      headerShown: false,
      gestureEnabled: false
    })
  },
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: () => ({
      headerShown: false,
      gestureEnabled: false
    })
  },
},
{
  initialRouteName: 'TabNavigator'
})

export default MainNavigator
