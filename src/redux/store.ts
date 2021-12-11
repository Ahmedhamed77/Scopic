import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './rootReducer';

const middleWare = [thunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleWare.push(createDebugger());
}

export const store = createStore(RootReducer, applyMiddleware(...middleWare));
