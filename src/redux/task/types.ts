import {Task} from '../../shared';

export enum ActionType {
  GET_TASK = 'GET_USER',
  TASK_LOADING = 'TASK_LOADING',
  TASK_ERROR = 'TASK_ERROR',
}

interface GetTasks {
  type: ActionType.GET_TASK;
  payload: Task[];
}

interface TaskLoading {
  type: ActionType.TASK_LOADING;
}

interface TaskError {
  type: ActionType.TASK_ERROR;
  payload: any;
}

export type Action = GetTasks | TaskLoading | TaskError;
