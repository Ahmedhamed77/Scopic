import {StyleSheet} from 'react-native';

import {COLORS} from '../../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 38,
    justifyContent: 'space-between',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  headerText: {
    color: COLORS.dustyGray,
    fontSize: 24,
    lineHeight: 32,
  },
  signIn: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 32,
  },
  footer: {
    alignItems: 'flex-end',
    marginBottom: 50,
  },
  footerText: {
    color: COLORS.brightRed,
  },
});
