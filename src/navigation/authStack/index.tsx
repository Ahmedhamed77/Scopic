import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthParamList, AuthParams} from './interface';
import {LoginScreen, RegistrationScreen} from '../../screens';

const Stack = createNativeStackNavigator<AuthParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AuthParams.login} component={LoginScreen} />
      <Stack.Screen
        name={AuthParams.registration}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
};
