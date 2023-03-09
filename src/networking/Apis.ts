import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const PLATFORM = Platform.OS.toUpperCase();
let VERSION = DeviceInfo.getVersion();

export default {
  checkUpdate: `/app-version/version/${VERSION}/platform/${PLATFORM}`,
};
