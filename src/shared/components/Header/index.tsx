import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainParams, MainParamsList} from '@Navigation/mainStack/interface';

import {CustomText, Dictionary} from '@Shared/index';
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
      {!inverted ? (
        <TouchableOpacity activeOpacity={1} onPress={onNavigateBack}>
          <CustomText fontFamily="Poppins-Bold" style={styles.navigators}>
            {Dictionary.back}
          </CustomText>
        </TouchableOpacity>
      ) : (
        <View style={styles.empty}>
          <CustomText />
        </View>
      )}
      <CustomText fontFamily="Poppins-Bold" style={styles.screenTitle}>
        {screenTitle}
      </CustomText>

      {rightTitle ? (
        <TouchableOpacity activeOpacity={1} onPress={onNextScreen}>
          <CustomText fontFamily="Poppins-Bold" style={styles.navigators}>
            {rightTitle}
          </CustomText>
        </TouchableOpacity>
      ) : (
        <View style={styles.empty}>
          <CustomText />
        </View>
      )}
    </View>
  );
};
