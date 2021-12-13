import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

import {DB} from '../db';

export const deleteTask = (userId: string, taskId: string) => {
  firestore()
    .collection(DB.users)
    .doc(userId)
    .collection(DB.tasks)
    .doc(taskId)
    .delete()
    .then(() => {
      console.log('task deleted!');
    })
    .catch(err => Alert.alert(err));
};
