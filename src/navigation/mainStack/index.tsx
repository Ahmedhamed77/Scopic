import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainParams, MainParamsList} from './interface';
import {WelcomeScreen, ListScreen, ProfileScreen} from '../../screens';
import {useSelector} from 'react-redux';
import {Store} from '../../redux/types';

const Stack = createNativeStackNavigator<MainParamsList>();
export const MainStack = () => {
  const {isNewUser} = useSelector((store: Store) => store.auth);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isNewUser ? (
        <>
          <Stack.Screen
            name={MainParams.home}
            component={WelcomeScreen}
            options={{
              gestureEnabled: true,
            }}
          />
          <Stack.Screen name={MainParams.list} component={ListScreen} />
          <Stack.Screen name={MainParams.profile} component={ProfileScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name={MainParams.list} component={ListScreen} />
          <Stack.Screen name={MainParams.profile} component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
