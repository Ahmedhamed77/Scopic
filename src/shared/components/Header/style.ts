import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
