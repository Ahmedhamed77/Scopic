import {StyleSheet} from 'react-native';
import {COLORS} from '@Shared/styles';

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
    borderRadius: 4,
    justifyContent: 'center',
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
  emptyContainer: {justifyContent: 'center', alignItems: 'center'},
});
