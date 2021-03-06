import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {TaskValues} from '@Shared/types';
import {DB} from '../db';

export const updateTask = (id: string, values: TaskValues) => {
  firestore()
    .collection(DB.tasks)
    .doc(id)
    .update({
      values,
    })
    .then(() => {
      console.log('task updated!');
    })
    .catch(err => Alert.alert(err));
};
