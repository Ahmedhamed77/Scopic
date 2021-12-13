import React from 'react';

import {styles} from './style';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '@Shared/styles';
import FoundationIcon from 'react-native-vector-icons/Foundation';
interface FooterProps {
  onPress(): void;
}

export const Footer: React.FC<FooterProps> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.footerContainer, styles.button]}>
      <FoundationIcon name="plus" color={COLORS.white} size={30} />
    </TouchableOpacity>
  );
};
