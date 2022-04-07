import AsyncStorage from '@react-native-async-storage/async-storage';

const setEventID = async (eventId) => {
	try {
		await AsyncStorage.setItem('event_id', eventId);
	}
	catch (err) {
    	console.log('setEventID', err);
  	}
}

const getEventID = async () => {
	try {
		const eventId = await AsyncStorage.getItem('event_id');		
		if (eventId) {
			return eventId;	
		}		
	}
	catch (err) {
    	console.log('getEventID', err);
  	}
  	return 'confirm_button';
}



export { setEventID, getEventID };

