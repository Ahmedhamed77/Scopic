import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {CustomText, Dictionary} from '../..';
import {
  MainParams,
  MainParamsList,
} from '../../../navigation/mainStack/interface';
import {styles} from './style';

export type HeaderProps = {
  screenTitle: string;
  rightTitle?: string;
  onNextScreen(): void;
};
export const Header: React.FC<HeaderProps> = ({
  screenTitle,
  rightTitle,
  onNextScreen,
}) => {
  const navigation =
    useNavigation<StackNavigationProp<MainParamsList, MainParams>>();

  const onNavigateBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <CustomText
        fontFamily="Poppins-Bold"
        onPress={onNavigateBack}
        style={styles.navigators}>
        {Dictionary.back}
      </CustomText>

      <CustomText fontFamily="Poppins-Bold" style={styles.screenTitle}>
        {screenTitle}
      </CustomText>

      {rightTitle && (
        <CustomText
          fontFamily="Poppins-Bold"
          style={styles.navigators}
          onPress={onNextScreen}>
          {rightTitle}
        </CustomText>
      )}
    </View>
  );
};
