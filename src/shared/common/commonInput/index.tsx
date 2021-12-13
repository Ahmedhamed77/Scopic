import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {CustomText} from '..';

import {COLORS} from '../../styles';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
export interface CommonInputProps extends TextInputProps {
  label?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  textCounter?: number;
  inverted?: boolean;
  icon?: React.ReactNode;
  onIconPress?(): void;
}

export const CommonInput: React.FC<CommonInputProps> = ({
  label,
  wrapperStyle,
  textCounter,
  inverted,
  icon,
  onIconPress,
  ...props
}) => {
  return (
    <View style={[styles.container, wrapperStyle]}>
      {label && <CustomText style={styles.labelText}>{label}</CustomText>}
      {inverted && (
        <View style={styles.counterContainer}>
          <CustomText
            style={styles.counterText}>{`${textCounter}/40`}</CustomText>
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={COLORS.dustyGray}
          {...props}
        />
        {icon && (
          <TouchableOpacity activeOpacity={1} onPress={onIconPress}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
