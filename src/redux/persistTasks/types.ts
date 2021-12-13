export enum ActionType {
  CREATE_TASK = 'CREATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
}

interface CreateTask {
  type: ActionType.CREATE_TASK;
  payload: string;
}

interface DeleteTask {
  type: ActionType.DELETE_TASK;
  payload: string;
}

export interface PersistTasks {
  title: string;
  id: string;
}

export type Action = CreateTask | DeleteTask;
