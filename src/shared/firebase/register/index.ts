import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const registerUser = (email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log('User account created & signed in!', res);
    })
    .catch(error => {
      Alert.alert(error.code);
    });
};
