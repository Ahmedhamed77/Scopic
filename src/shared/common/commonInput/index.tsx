import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

import {COLORS} from '../../styles';
import {styles} from './style';

interface CommonInputProps extends TextInputProps {
  label?: string;
}

export const CommonInput: React.FC<CommonInputProps> = ({label, ...props}) => {
  return (
    <View>
      <Text>Common Input</Text>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={styles.textInputStyle}
        autoCorrect={false}
        placeholderTextColor={COLORS.dustyGray}
        {...props}
      />
    </View>
  );
};
