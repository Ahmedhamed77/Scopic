import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import rootReducer from './rootReducer';

export type Store = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Store,
  unknown,
  Action<string>
>;
