import auth from '@react-native-firebase/auth';
import {Dispatch} from 'redux';
import firestore from '@react-native-firebase/firestore';

import {Action, ActionType} from './types';
import {Task} from '../../shared';

export const getTasks =
  (task: Task[]) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.TASK_LOADING});
    try {
      dispatch({type: ActionType.GET_TASK, payload: task});
    } catch (error) {
      console.log(error, 'error user');
      dispatch({type: ActionType.TASK_ERROR, payload: error});
    }
  };
