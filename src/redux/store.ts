import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

import {persistAppReducer} from './rootReducer';

const middleWare = [thunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleWare.push(createDebugger());
}

export const store = createStore(
  persistAppReducer,
  applyMiddleware(...middleWare),
);

export const persistor = persistStore(store);
