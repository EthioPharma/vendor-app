import 'react-native-gesture-handler';
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
import messaging from '@react-native-firebase/messaging';
import {StartPrinting} from './src/Screens/PrinterConnection/PrinteFunc';
import actions from './src/redux/actions';

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  const {data, notification} = remoteMessage;

  if (
    Platform.OS == 'android' &&
    notification.android.sound == 'notification'
  ) {
    let _data = JSON.parse(data.data);
    if (_data.vendors[0].vendor.auto_accept_order == 1) {
      StartPrinting(_data);
    } else {
      setTimeout(()=>{
        actions.updateVendorNotification(true);
        actions.isVendorNotification(true);
      },2000)
    }
  }
});
messaging().getInitialNotification(async (remoteMessage) => {
  const {data, notification} = remoteMessage;
  console.log(data,"data in quit modee")
  if (
    Platform.OS == 'android' &&
    notification.android.sound == 'notification'
  ) {
    let _data = JSON.parse(data.data);
    if (_data.vendors[0].vendor.auto_accept_order == 1) {
      StartPrinting(_data);
    } else {
      setTimeout(()=>{
        actions.updateVendorNotification(true);
        actions.isVendorNotification(true);
      },4000)
    }
  }
});
AppRegistry.registerComponent(appName, () => App);
