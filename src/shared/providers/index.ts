import compose from 'compose-function';

import {withNavigationContainer} from './with-navigation-container';
import {withReduxProvider} from './with-redux';
import {withReduxPersist} from './with-redux-presist';

export const withProviders = compose(
  withReduxProvider,
  withReduxPersist,
  withNavigationContainer,
);
