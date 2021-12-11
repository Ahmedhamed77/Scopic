import React, {useState} from 'react';

import {styles} from './style';
import {View, Text} from 'react-native';
import {CommonButton, CommonInput, Dictionary} from '../../../shared';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>welcome to home screen</Text>
      <CommonInput
        label={Dictionary.email}
        value={name}
        onChangeText={setName}
      />
      <CommonButton
        touchableStyle={styles.buttonStyle}
        title={Dictionary.login}
        isDisabled={true}
      />
    </View>
  );
};
