import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
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
  counterContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  counterText: {
    color: COLORS.brightRed,
    fontWeight: 'bold',
  },
});
