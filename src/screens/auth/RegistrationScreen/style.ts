import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 38,
  },
  signInText: {
    paddingVertical: 32,
    fontSize: 24,
    lineHeight: 32,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: COLORS.brightRed,
    paddingHorizontal: 8,
  },
});
