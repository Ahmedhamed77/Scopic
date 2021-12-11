import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './style';

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>welcome to ProfileScreen</Text>
    </View>
  );
};
