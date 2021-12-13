import {persistor} from '@Redux/store';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

export const withReduxPersist = (component: () => React.ReactNode) => () =>
  <PersistGate persistor={persistor}>{component()}</PersistGate>;
