import {COLORS} from './../../styles/colors/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300,
  },
  swipedRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: COLORS.shadGray,
    margin: 12,
    minHeight: 50,
  },
  swipedConfirmationContainer: {
    flex: 1,
  },
  deleteConfirmationText: {
    color: COLORS.smoke,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  deleteButtonText: {
    color: COLORS.smoke,
    fontWeight: 'bold',
    padding: 3,
  },
});
