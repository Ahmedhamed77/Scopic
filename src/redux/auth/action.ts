import {Dispatch} from 'redux';
import {Action, ActionType} from './types';

export const registerNewUser = () => (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.IS_REGISTER});
};

export const loginUser = () => (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.IS_LOGIN});
};
