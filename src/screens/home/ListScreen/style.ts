import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  toggleContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerContainer: {
    position: 'absolute',
    bottom: height / 6,
    left: width - 70,
    zIndex: 100,
  },
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 5,
  },
});
