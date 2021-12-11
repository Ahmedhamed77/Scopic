import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  scrollScreen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
