import {Action, ActionType} from './types';

export const createNewTask = (title: string): Action => {
  return {
    type: ActionType.CREATE_TASK,
    payload: title,
  };
};

export const deleteTask = (id: string): Action => {
  return {
    type: ActionType.DELETE_TASK,
    payload: id,
  };
};
