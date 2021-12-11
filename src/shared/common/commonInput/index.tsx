import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import {CustomText} from '..';

import {COLORS} from '../../styles';
import {styles} from './style';

interface CommonInputProps extends TextInputProps {
  label?: string;
}

export const CommonInput: React.FC<CommonInputProps> = ({label, ...props}) => {
  return (
    <View>
      {label && <CustomText style={styles.labelText}>{label}</CustomText>}
      <TextInput
        style={styles.textInputStyle}
        autoCorrect={false}
        placeholderTextColor={COLORS.dustyGray}
        {...props}
      />
    </View>
  );
};
