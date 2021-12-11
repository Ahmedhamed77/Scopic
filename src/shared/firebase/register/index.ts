import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const registerUser = (email: string, password: string) => {
  console.log('here register');
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log('User account created & signed in!', res);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }
    });
};
