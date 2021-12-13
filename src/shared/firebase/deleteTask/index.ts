import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

import {DB} from '../db';

export const deleteTask = (id: string) => {
  firestore()
    .collection(DB.tasks)
    .doc(id)
    .delete()
    .then(() => {
      console.log('task deleted!');
    })
    .catch(err => Alert.alert(err));
};
