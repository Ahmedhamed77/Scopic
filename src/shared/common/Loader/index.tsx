import {View, ActivityIndicator, ViewStyle, StyleProp} from 'react-native';
import React from 'react';

import {COLORS} from '@Shared/styles';
import {styles} from './style';
interface LoaderProps {
  style?: StyleProp<ViewStyle>;
}

export const Loader: React.FC<LoaderProps> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator color={COLORS.aqua} />
    </View>
  );
};
