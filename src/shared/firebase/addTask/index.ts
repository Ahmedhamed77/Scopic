import firestore from '@react-native-firebase/firestore';

import {TaskValues} from '../../types';
import {DB} from '../db';

export const addTask = (values: TaskValues) => {
  firestore()
    .collection(DB.task)
    .add({
      title: values.title,
      desc: values.desc,
      createdAt: new Date(),
    })
    .then(() => {
      console.log('task added!');
    })
    .catch(err => console.log(err, 'error adding task'));
};
