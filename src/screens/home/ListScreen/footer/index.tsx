import React from 'react';

import {styles} from './style';
import {View} from 'react-native';
import {CommonButton} from '../../../../shared';

interface FooterProps {
  onPress(): void;
}

export const Footer: React.FC<FooterProps> = ({onPress}) => {
  return (
    <View style={styles.footerContainer}>
      <CommonButton
        touchableStyle={styles.button}
        title="+"
        onPress={onPress}
      />
    </View>
  );
};
