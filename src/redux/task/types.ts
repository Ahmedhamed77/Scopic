import {Task} from '../../shared';

export enum ActionType {
  GET_TASK = 'GET_USER',
  TASK_LOADING = 'USER_LOADING',
  TASK_ERROR = 'USER_ERROR',
}

interface GetUser {
  type: ActionType.GET_TASK;
  payload: Task[];
}

interface UserLoading {
  type: ActionType.TASK_LOADING;
}

interface UserError {
  type: ActionType.TASK_ERROR;
  payload: any;
}

export type Action = GetUser | UserLoading | UserError;
