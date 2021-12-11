import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './style';

interface RegistrationScreenProps {}

export const RegistrationScreen: React.FC<RegistrationScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to RegistrationScreen</Text>
    </View>
  );
};
