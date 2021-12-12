import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },

  renderItemContainer: {
    flex: 1,
    backgroundColor: COLORS.lightShadGray,
    padding: 6,
    marginTop: 12,
    minHeight: 50,
  },
  titleStyle: {
    textTransform: 'capitalize',
  },
  descStyle: {
    color: COLORS.lightAluminum,
  },
  separator: {
    backgroundColor: COLORS.lightAluminum,
    height: 2,
  },
});
