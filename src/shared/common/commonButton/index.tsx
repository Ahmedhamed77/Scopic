import React from 'react';

import {styles} from './style';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../styles';
import {CustomText} from '../customText';

export interface CommonButtonProps
  extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  wrapperContainer?: StyleProp<ViewStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
  titleStyle?: StyleProp<TextStyle>;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  wrapperContainer,
  touchableStyle,
  isDisabled,
  titleStyle,
  isLoading,
  ...props
}) => {
  return (
    <View style={[styles.container, wrapperContainer]}>
      <TouchableOpacity
        activeOpacity={1}
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
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <CustomText style={[styles.touchableText, titleStyle]}>
            {title}
          </CustomText>
        )}
      </TouchableOpacity>
    </View>
  );
};
