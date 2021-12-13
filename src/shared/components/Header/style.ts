import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../styles';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screenTitle: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  navigators: {
    color: COLORS.brightRed,
    textTransform: 'capitalize',
  },
});
