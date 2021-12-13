import firestore from '@react-native-firebase/firestore';
import {DB} from '../db';

export const addUser = (email: string, id: string) => {
  firestore()
    .collection(DB.users)
    .doc(id)
    .set({
      email,
    })
    .then(() => {
      console.log('user added!');
    })
    .catch(err => console.log(err, 'error adding task'));
};
