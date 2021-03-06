import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum MainParams {
  home = 'home',
  list = 'list',
  profile = 'profile',
}

export type MainParamsList = {
  [MainParams.home]: NO_PARAMS;
  [MainParams.list]: NO_PARAMS;
  [MainParams.profile]: NO_PARAMS;
};

export type AppNavigation = StackNavigationProp<MainParamsList, MainParams>;
