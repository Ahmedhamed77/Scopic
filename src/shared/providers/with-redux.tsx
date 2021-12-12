import {store} from '../../redux/store';
import React from 'react';
import {Provider} from 'react-redux';

export const withReduxProvider = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
