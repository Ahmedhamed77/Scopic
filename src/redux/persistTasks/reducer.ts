import {Action, ActionType, PersistTasks} from './types';

interface PersistTask {
  persistTasks: PersistTasks[];
}
const initialState = {
  persistTasks: [],
};

export const persistTaskReducer = (
  state: PersistTask = initialState,
  action: Action,
): PersistTask => {
  switch (action.type) {
    case ActionType.CREATE_TASK:
      return {
        persistTasks: [
          ...state.persistTasks,
          {title: action.payload, id: Date.now().toString()},
        ],
      };
    case ActionType.DELETE_TASK:
      return {
        persistTasks: state.persistTasks.filter(
          task => task.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
