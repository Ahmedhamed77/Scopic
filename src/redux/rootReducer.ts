import {combineReducers} from 'redux';
import {userReducer} from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
