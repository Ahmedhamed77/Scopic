import firestore from '@react-native-firebase/firestore';

import {TaskValues} from '@Shared/types';
import {DB} from '../db';

export const addTask = (values: TaskValues, id: string) => {
  firestore()
    .collection(DB.users)
    .doc(id)
    .collection(DB.tasks)
    .add({
      title: values.title,
    })
    .then(() => {
      console.log('task added!');
    })
    .catch(err => console.log(err, 'error adding task'));
};
