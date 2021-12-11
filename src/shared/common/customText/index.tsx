import React from 'react';
import {StyleProp, TextProps, TextStyle, Text} from 'react-native';

export interface CustomTextProps extends Omit<TextProps, 'style'> {
  style?: StyleProp<TextStyle>;
  fontFamily?:
    | 'Poppins-BlackItalic'
    | 'Poppins-Black'
    | 'Poppins-Bold'
    | 'Poppins-ExtraBold'
    | 'Poppins-Medium'
    | 'Poppins-Italic'
    | 'Poppins-Regular'
    | 'Poppins-LightItalic'
    | 'Poppins-Thin';
}
export const CustomText: React.FC<CustomTextProps> = ({
  fontFamily = 'Poppins-Regular',
  style,
  ...props
}) => <Text style={[{fontFamily}, style]} {...props} />;
