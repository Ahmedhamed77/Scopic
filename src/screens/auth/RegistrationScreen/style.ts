import {StyleSheet, Dimensions} from 'react-native';

import {COLORS} from '@Shared/styles';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height,
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
