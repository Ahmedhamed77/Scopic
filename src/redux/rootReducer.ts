import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {authReducer} from './auth/reducer';
import {taskReducer} from './task/reducer';
import {persistTaskReducer} from './persistTasks/reducer';
import {Store} from './types';

const persistConfig = {
  key: 'Root',
  storage: AsyncStorage,
  whiteList: [],
  blacklist: ['auth', 'task', 'persistTasks'],
};

const rootReducer = combineReducers({
  task: taskReducer,
  auth: authReducer,
  persistTasks: persistTaskReducer,
});

export const persistAppReducer = persistReducer<Store, any>(
  persistConfig,
  rootReducer,
);
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
