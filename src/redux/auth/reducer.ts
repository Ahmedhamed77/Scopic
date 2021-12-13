import {Action, ActionType} from './types';

interface AuthReducer {
  isNewUser: boolean;
}
const initialState = {
  isNewUser: false,
};

export const authReducer = (
  state: AuthReducer = initialState,
  action: Action,
): AuthReducer => {
  switch (action.type) {
    case ActionType.IS_REGISTER:
      return {
        isNewUser: true,
      };
    case ActionType.IS_LOGIN:
      return {
        isNewUser: false,
      };
    default:
      return state;
  }
};
