import auth from '@react-native-firebase/auth';
import {Dispatch} from 'redux';

import {Action, ActionType} from './types';

export const userSignIn =
  (email: string, password: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.USER_LOADING});
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      dispatch({type: ActionType.USER_LOADING, payload: res.user});
    } catch (error) {
      console.log(error, 'error user');
      dispatch({type: ActionType.USER_ERROR, payload: error});
    }
  };
