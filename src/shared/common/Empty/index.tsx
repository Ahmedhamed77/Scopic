import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText} from '../customText';
import {COLORS} from '../../styles';

interface Props {
  message?: string;
}

export const Empty: React.FC<Props> = ({
  message = ' The Current List is Empty',
}) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>{message}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 19,
    color: COLORS.lightAluminum,
    marginTop: 40,
    textAlign: 'center',
  },
});
