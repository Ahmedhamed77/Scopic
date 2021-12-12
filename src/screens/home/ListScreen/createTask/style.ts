import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

import {COLORS} from '../../../../shared';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height / 2,
    top: height / 1.5,
    backgroundColor: COLORS.whiteSmoke,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 12,
  },
});
