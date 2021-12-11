import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {},
  touchableContainer: {
    borderRadius: 8,
    justifyContent: 'center',
    paddingVertical: 12,
    alignItems: 'center',
  },
  touchableText: {
    color: COLORS.white,
    fontSize: 17,
    textTransform: 'capitalize',
  },
  touchableTextDisabled: {
    color: COLORS.black,
  },
});
