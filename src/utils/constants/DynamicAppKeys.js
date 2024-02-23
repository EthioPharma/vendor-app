import {Platform} from 'react-native';
import {getBundleId} from 'react-native-device-info';

const shortCodes = {
  ethiopharma:'4dbfe1',
};

const appIds = {
  ethiopharma: Platform.select({
    ios: 'com.app.ethiopharma.vendor',
    android: 'com.app.eihiopharama.vendor',
  }),
};

// const socialKeys = {
//   TWITTER_COMSUMER_KEY: 'R66DHARfuoYAPowApUxNxwbPi',
//   TWITTER_CONSUMER_SECRET: 'itcicJ7fUV3b73B8V05GEDBo4tzxGox2Si2q0BCk5pue327k15',
// };

export {appIds, shortCodes};
