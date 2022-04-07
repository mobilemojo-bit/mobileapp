import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  View,
  TouchableHighlight,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';

const injectedJavascript = `
  document.getElementById('confirm_button').addEventListener('click', function() {
    window.ReactNativeWebView.postMessage('Confirm Button Clicked...');
  });
`;

const indexHTML = require('../../../assets/index.html');

const BrowserScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);

	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
    	backgroundColor: isDarkMode ? Colors.white : Colors.white,
      flex: 1,
  	};

  const getContent = async () => {
    console.log('playConfirm...');
    setLoading(true);

    fetch('https://swapi.dev/api/people/1', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
        // 'user_id': '111'
      // })
    })
    .then((response) => response.json())
    .then((json) => {
      setLoading(false);
      console.log('getContent', json);
      Alert.alert(
        'Confirm', 
        JSON.stringify(json), 
        [
          {
            text: 'OK',
            onPress: () => {}
          }
        ]
      );
    })
    .catch((error) => {
      setLoading(false);
      console.log('playConfirm error', error);
    });
  }

	return (
		<SafeAreaView style={backgroundStyle}>
			{ /*<WebView
        source={{ uri: 'https://sys.maxburst.biz/' }}
        // source={indexHTML}
        style={styles.webStyle}
        javaScriptEnabled={true}
        injectedJavaScript={injectedJavascript}
        onMessage={(e) => {
          console.log('confirm_button', e.nativeEvent.data);
          playConfirm();
        }}
      />  */ }

      <Text style={styles.content}>
        {content}
      </Text>  

      <TouchableHighlight
        onPress={() => {
          getContent();
        }}
        activeOpacity={1}
        underlayColor='#DDDDDD'
        style={styles.eventButton}
      >
        <Text>
          Fetch
        </Text>
      </TouchableHighlight>
      
      {loading && (
        <View
          style={styles.progressWrapper}
        >
          <ActivityIndicator 
            style={styles.activityIndicator}
            size='large' 
            color='#FFFFFF'            
          />
        </View>
      )}

      { /*<View
        style={styles.bottomView}
      >
        {loading && (
          <ActivityIndicator />
        )}
        {!loading && (
          <TouchableHighlight
            onPress={() => {
              playConfirm()
            }}
            activeOpacity={1}
            underlayColor='#DDDDDD'
            style={styles.eventButton}
          >        
            <Text>
              Button to click
            </Text>
          </TouchableHighlight>
        )}
      </View>*/ }
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
  webStyle: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'orange',
  },  
  bottomView: {
    height: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventButton: {
    width: 140,
    height: 40,
    backgroundColor: '#CCCCCC',    
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',  
    alignSelf: 'center',
  },
  progressWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  activityIndicator: {
    
  },
  content: {
    marginTop: 150,
    fontSize: 15,
    fontWeight: '600',    
    textAlign: 'center',
  },
});

export default BrowserScreen;






