import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const login = (email: string, password: string) => {
  console.log(email, password, '===here');
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('User account created & signed in!', res);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }
      console.log(error, '===');
    });
};
