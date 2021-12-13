import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

import {COLORS} from '../../../../shared';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    height: height / 3,
    top: height / 4,
    backgroundColor: COLORS.whiteSmoke,
    borderRadius: 20,
    padding: 12,
  },
});
