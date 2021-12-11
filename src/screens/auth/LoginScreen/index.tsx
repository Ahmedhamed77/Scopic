import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './style';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to LoginScreen</Text>
    </View>
  );
};
