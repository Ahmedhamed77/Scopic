import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {AuthStack, MainStack} from './src/navigation';
import {withProviders} from './src/shared';
import {UseAuth} from './src/shared/hooks';

const App = () => {
  const {isAuth} = UseAuth();
  return <>{isAuth ? <MainStack /> : <AuthStack />}</>;
};

export default withProviders(App);
