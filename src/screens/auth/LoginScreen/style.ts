import {StyleSheet, Dimensions} from 'react-native';

import {COLORS} from '@Shared/styles';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height,
    width: '100%',
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
    marginBottom: 100,
  },
  footerText: {
    color: COLORS.brightRed,
  },
});
