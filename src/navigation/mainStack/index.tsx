import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainParams, MainParamsList} from './interface';
import {WelcomeScreen, ListScreen, ProfileScreen} from '../../screens';

const Stack = createNativeStackNavigator<MainParamsList>();
export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={MainParams.home} component={WelcomeScreen} />
      <Stack.Screen name={MainParams.list} component={ListScreen} />
      <Stack.Screen name={MainParams.profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
