import PushNotification from 'react-native-push-notification'
import { Alert } from 'react-native'
import PushNotificationIOS from '@react-native-community/push-notification-ios'

const configure = () => {

  PushNotification.configure({
    onRegister: token => {
      console.log('/// device', token)      
      return token.length
    },

    onNotification(notification) {
      console.log('notification received', notification)
      // if (notification.alert && notification.alert.title) {
      //   console.log('notification.alert', notification.alert)
      //   localNotification(notification.alert.title, notification.alert.body)
      // }      

      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },

    onRegistrationError: (error) => {
      console.log('onRegistrationError', error)
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true
    },

    popInitialNotification: true,
    requestPermissions: true
  })
}

const localNotification = (title, message) => {
  // setTimeout(() => {
    PushNotification.localNotification({
      id: '123',
      autoCancel: true,
      vibrate: true,
      vibration: 300,
      title: title,
      message: message,
    })
  // }, 5000)
  setTimeout(() => {
    PushNotification.cancelLocalNotifications({id: '123'})
  }, 2000)
}

export { configure, localNotification }
