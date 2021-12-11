import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'))
    .catch(error => Alert.alert(error.code));
};
