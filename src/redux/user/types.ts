import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export enum ActionType {
  GET_USER = 'GET_USER',
  USER_LOADING = 'USER_LOADING',
  USER_ERROR = 'USER_ERROR',
}

interface GetUser {
  type: ActionType.GET_USER;
  payload: FirebaseAuthTypes.User;
}

interface UserLoading {
  type: ActionType.USER_LOADING;
}

interface UserError {
  type: ActionType.USER_ERROR;
  payload: any;
}

export type Action = GetUser | UserLoading | UserError;
