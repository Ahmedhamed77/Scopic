/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {AuthStack, MainStack} from './src/navigation';
import {withProviders} from './src/shared';

const isAuth = true;
const App = () => {
  return <>{isAuth ? <MainStack /> : <AuthStack />}</>;
};

export default withProviders(App);
