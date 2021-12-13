import {View, ActivityIndicator, ViewStyle, StyleProp} from 'react-native';
import React from 'react';

import {styles} from './style';
import {COLORS} from '../../styles';
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
