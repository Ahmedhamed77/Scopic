export enum ActionType {
  IS_REGISTER = 'IS_REGISTER',
  IS_LOGIN = 'IS_LOGIN',
}

interface IsRegister {
  type: ActionType.IS_REGISTER;
}

interface IsLogin {
  type: ActionType.IS_LOGIN;
}

export type Action = IsRegister | IsLogin;
