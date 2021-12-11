import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {},
  textInputStyle: {
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: COLORS.dustyGray,
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Bold',
  },
  labelText: {
    color: COLORS.brightRed,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
