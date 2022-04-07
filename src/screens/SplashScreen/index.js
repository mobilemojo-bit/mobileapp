import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const SplashScreen = ({ navigation }) => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
    	backgroundColor: isDarkMode ? Colors.white : Colors.white,
      flex: 1,
  	};

	return (
		<SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Splash screen
        </Text>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}
          activeOpacity={1}
          underlayColor='#DDDDDD'
          style={styles.okButton}
        >
          <Text>
            Ready to Go!
          </Text>
        </TouchableHighlight>
      </View>      
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,    
    paddingHorizontal: 24,    
    display: 'flex',
    justifyContent: 'space-between',  
    alignItems: 'center',  
  },
  title: {
    marginTop: 150,
    fontSize: 20,
    fontWeight: '600',    
    textAlign: 'center',
  },
  okButton: {
    width: 150,
    height: 40,
    marginBottom: 40,
    backgroundColor: '#CCCCCC',    
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',  
  },
});

export default SplashScreen;





