import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

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
  empty: {
    paddingHorizontal: 12,
  },
});
