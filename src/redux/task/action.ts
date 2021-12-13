import {Dispatch} from 'redux';

import firestore from '@react-native-firebase/firestore';
import {Action, ActionType} from './types';

import {TaskData, Task} from '@Shared/index';
import {DB} from '@Shared/firebase/db';

export const getTasks = (id: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.TASK_LOADING});
  try {
    firestore()
      .collection(DB.users)
      .doc(id)
      .collection(DB.tasks)
      .onSnapshot(snapshot => {
        const tasks = snapshot.docs.map(doc => ({
          data: doc.data() as TaskData,
          id: doc.id,
        }));

        dispatch({
          type: ActionType.GET_TASK,
          payload: tasks as Omit<Task[], 'title'>,
        });
      });
  } catch (error) {
    dispatch({type: ActionType.TASK_ERROR, payload: error});
  }
};
