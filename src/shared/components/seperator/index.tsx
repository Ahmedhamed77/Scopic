import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '@Shared/styles';

interface Props {
  color?: string;
}

export const ItemSeparator: React.FC<Props> = ({
  color = COLORS.lightAluminum,
}) => {
  return <View style={[styles.separator, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 2,

    backgroundColor: 'red',
  },
});
