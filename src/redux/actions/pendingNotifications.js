import store from '../store';
import types from '../types';
const { dispatch } = store;

export function pendingNotifications(data = []) {
    console.log(data, 'data');
    dispatch({
        type: types.PENDING_NOTIFICATIONS,
        payload: data,
    });
}

export function isVendorNotification(data = false) {
    console.log(data, 'data');
    dispatch({
        type: types.IS_VENDOR_NOTIFICATIONS,
        payload: data,
    });
}
export function updateVendorNotification(data = false) {
    console.log(data, 'data');
    dispatch({
    type: types.UPDATE_VENDOR_NOTIFICATION,
    payload: data,
    });
    }