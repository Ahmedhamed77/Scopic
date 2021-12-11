import {Action, ActionType} from './types';

interface UserReducer {
  user: {} | null;
  loading: boolean;
  error: string | null;
}
const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const userReducer = (
  state: UserReducer = initialState,
  action: Action,
): UserReducer => {
  switch (action.type) {
    case ActionType.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_USER:
      return {
        loading: false,
        user: action.payload,
        error: null,
      };
    case ActionType.USER_ERROR:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
