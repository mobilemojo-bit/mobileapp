import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,  
  TextInput,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as functions from '../../utils/functions'


const SettingsScreen = ({ navigation }) => {
	const isDarkMode = useColorScheme() === 'dark';
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    async function getEventID() {
      let value = await functions.getEventID();
      setUserID(value);
    }

    if (userID == null) {
      getEventID();
    }
    
    if (userID != null) {
      functions.setEventID(userID);
    }    
  }, [userID]);


	const backgroundStyle = {
    	backgroundColor: isDarkMode ? Colors.white : Colors.white,
      flex: 1,
  	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<Text style={styles.title}>Settings</Text>
      <ScrollView
        style={styles.scrollView}
      >
        <TouchableOpacity
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>
            Push Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate('SplashScreen');
          }}
        >
          <Text 
            style={styles.menuItemText}
          >
            Show Splash
          </Text>
        </TouchableOpacity>
        <View
          style={styles.confirmIdWrapper}
        >
          <Text
            style={styles.menuItemText}
          >
            User ID:
          </Text>
          <TextInput 
            style={styles.inputIdWrapper}
            onChangeText={(val) => setUserID(val)}
            value={userID}
            placeholder='Confirm User ID'
          />
        </View>
      </ScrollView>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 17,
    textAlign: 'center',
  },
  scrollView: {
    paddingTop: 10,
  },
  menuItem: {
    // backgroundColor: 'green',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 11,
    paddingBottom: 11,    
  },
  menuItemText: {
    fontSize: 17,
  },
  confirmIdWrapper: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIdWrapper: {
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    flex: 1,
  },
});

export default SettingsScreen;






