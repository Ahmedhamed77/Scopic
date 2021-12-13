import {StyleSheet} from 'react-native';

import {COLORS} from '@Shared/styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    flex: 1,
  },
  welcomeText: {
    alignSelf: 'center',
    fontSize: 24,
    paddingTop: 12,
  },
  welcomeMsgText: {
    alignSelf: 'center',
    fontSize: 24,
    color: COLORS.dustyGray,
  },
  buttonStyle: {
    paddingVertical: 12,
  },
});
