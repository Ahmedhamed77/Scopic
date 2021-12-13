import React from 'react';

import {styles} from './style';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import {CustomText} from '../customText';
import {PressableScale, PressableScaleProps} from '@Shared/components';
import {Loader} from '../Loader';
import {COLORS} from '@Shared/styles';

export interface CommonButtonProps extends PressableScaleProps {
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
    <PressableScale {...props}>
      <View style={[styles.container, wrapperContainer]}>
        <View
          style={[
            styles.touchableContainer,
            {
              backgroundColor: isDisabled
                ? COLORS.lightAluminum
                : COLORS.brightRed,
            },
            touchableStyle,
          ]}>
          {isLoading ? (
            <Loader />
          ) : (
            <CustomText style={[styles.touchableText, titleStyle]}>
              {title}
            </CustomText>
          )}
        </View>
      </View>
    </PressableScale>
  );
};
