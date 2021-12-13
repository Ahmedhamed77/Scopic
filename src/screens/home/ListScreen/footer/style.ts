import {COLORS} from './../../../../shared/styles/colors/index';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {},
  footerContainer: {
    position: 'absolute',
    bottom: height / 6,
    left: width - 70,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    shadowColor: COLORS.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: COLORS.brightRed,
  },
});
