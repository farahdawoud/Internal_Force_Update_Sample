import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    paddingVertical: 18,
  },
  updateButton: {
    backgroundColor: colors.blue,
    width: '45%',
    marginHorizontal: '3%',
  },
  closeButton: {
    backgroundColor: colors.grey,
    width: '45%',
    marginHorizontal: '3%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'center',
  },
  updateMessage: {
    fontWeight: 'bold',
    marginBottom: 40,
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 18,
  },
  updateButtonTitle: {
    fontWeight: '600',
    color: colors.white,
  },
  closeButtonTitle: {
    fontWeight: '600',
    color: colors.black,
  },
  image: {
    width: '50%',
    height: 200,
  },
});
