import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const login = (email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('User account created & signed in!', res);
    })
    .catch(error => {
      Alert.alert(error.code);
    });
};
