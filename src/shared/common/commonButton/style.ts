import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {},
  touchableContainer: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableText: {
    color: COLORS.white,
    fontSize: 17,
  },
  touchableTextDisabled: {
    color: COLORS.black,
  },
});
