import {StyleSheet} from 'react-native';
import colors from '../../ui/theme/colors';
import metrics from '../../ui/theme/metrics';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: metrics.screenHeight,
    alignItems: 'center',
  },
  mainTitle: {
    fontWeight: '600',
    marginTop: 60,
    fontSize: 24,
  },
});
