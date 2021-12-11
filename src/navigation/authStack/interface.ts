import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AuthParams {
  registration = 'registration',
  login = 'login',
}

export type AuthParamList = {
  [AuthParams.registration]: NO_PARAMS;
  [AuthParams.login]: NO_PARAMS;
};

export type AuthNavigation = StackNavigationProp<AuthParamList, AuthParams>;
