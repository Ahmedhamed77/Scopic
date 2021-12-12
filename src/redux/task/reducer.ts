import {Task} from '../../shared';
import {Action, ActionType} from './types';

interface TaskReducer {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = (
  state: TaskReducer = initialState,
  action: Action,
): TaskReducer => {
  switch (action.type) {
    case ActionType.TASK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_TASK:
      return {
        loading: false,
        tasks: action.payload,
        error: null,
      };
    case ActionType.TASK_ERROR:
      return {
        loading: false,
        tasks: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
