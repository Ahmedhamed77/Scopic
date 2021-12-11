import React from 'react';

import {styles} from './style';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../styles';

interface CommonButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  wrapperContainer?: StyleProp<ViewStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
  isDisabled: boolean;
  titleStyle?: StyleProp<TextStyle>;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  wrapperContainer,
  touchableStyle,
  isDisabled,
  titleStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, wrapperContainer]}>
      <TouchableOpacity
        style={[
          styles.touchableContainer,
          {
            backgroundColor: isDisabled
              ? COLORS.lightAluminum
              : COLORS.brightRed,
          },
          touchableStyle,
        ]}
        {...props}>
        <Text style={[styles.touchableText, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
