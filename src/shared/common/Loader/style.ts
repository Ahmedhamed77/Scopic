import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: 10,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {marginTop: 30},
  containerSmall: {
    width: 70,
    height: 70,
  },
  containerLarge: {
    width: 90,
    height: 90,
  },
  loadingSmall: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  loadingLarge: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
