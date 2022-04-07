import React from 'react';
import { Image, StyleSheet } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BrowserScreen from '../screens/BrowserScreen/'
import SettingsScreen from '../screens/SettingsScreen/'

import IconBrowser from '../../assets/browser.png'
import IconSettings from '../../assets/settings.png'
import IconBrowserDeselect from '../../assets/browser_deselect.png'
import IconSettingsDeselect from '../../assets/settings_deselect.png'


const TabNavigator = createBottomTabNavigator({
  	Browser: BrowserScreen,
  	Settings: SettingsScreen,  	
},
{
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			let iconRes;
			if (routeName == 'Browser') {
				iconRes = focused? IconBrowser: IconBrowserDeselect;
			}
			else if (routeName == 'Settings') {
				iconRes = focused? IconSettings: IconSettingsDeselect;	
			}

			return <Image source={iconRes} style={focused? styles.tabIconFocused: styles.tabIconDefault} />;
		},
	}),
	tabBarOptions: {
		activeTintColor: '#EEEEEE',
		inactiveTintColor: '#504A96',
		showLabel: false,
		// safeAreaInset: { 
		// 	bottom: 'never',
		// 	top: 'never',
		// },
		style: {
			backgroundColor: '#EEEEEE',
			// position: 'absolute',
			// zIndex: 1,
		    // left: 10,
		    // right: 10,
		    // bottom: 20,
		    // height: 70,
		    // borderBottomLeftRadius: 10,
		    // borderBottomRightRadius: 10,
		    // borderTopLeftRadius: 20,
		    // borderTopRightRadius: 20,
		    // borderTopColor: 'transparent',
		},
		tabStyle: {
			marginBottom: 0,
		},
		labelStyle: {
			fontSize: 0,
		},
	},
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({    
    tabIconFocused: {
    	width: 30,
    	height: 30,
    	// marginTop: 30,
    },
    tabIconDefault: {
    	width: 25,
    	height: 25,
    	// marginTop: 30,
    },
});



