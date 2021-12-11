import React, {useState} from 'react';

import {styles} from './style';
import {View} from 'react-native';
import {
  CommonButton,
  CommonInput,
  CustomText,
  Dictionary,
} from '../../../shared';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <CustomText>welcome to home screen</CustomText>
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
