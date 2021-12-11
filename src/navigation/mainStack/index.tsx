import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainParams, MainParamsList} from './interface';
import {HomeScreen, ProfileScreen} from '../../screens';

const Stack = createNativeStackNavigator<MainParamsList>();
export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MainParams.home} component={HomeScreen} />
      <Stack.Screen name={MainParams.profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
