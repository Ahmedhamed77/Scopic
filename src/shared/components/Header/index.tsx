import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
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
  onNextScreen?(): void;
  wrapperStyle?: StyleProp<ViewStyle>;
  inverted?: boolean;
};
export const Header: React.FC<HeaderProps> = ({
  screenTitle,
  rightTitle,
  onNextScreen,
  wrapperStyle,
  inverted,
}) => {
  const navigation =
    useNavigation<StackNavigationProp<MainParamsList, MainParams>>();

  const onNavigateBack = () => navigation.goBack();

  return (
    <View style={[styles.container, wrapperStyle]}>
      <TouchableOpacity activeOpacity={1} onPress={onNavigateBack}>
        {!inverted && (
          <CustomText fontFamily="Poppins-Bold" style={styles.navigators}>
            {Dictionary.back}
          </CustomText>
        )}
      </TouchableOpacity>

      <CustomText fontFamily="Poppins-Bold" style={styles.screenTitle}>
        {screenTitle}
      </CustomText>

      <TouchableOpacity activeOpacity={1} onPress={onNextScreen}>
        {rightTitle && (
          <CustomText fontFamily="Poppins-Bold" style={styles.navigators}>
            {rightTitle}
          </CustomText>
        )}
      </TouchableOpacity>
    </View>
  );
};
