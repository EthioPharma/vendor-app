import types from '../types';

const initial_state = {
    pendingNotifications: [],
    isVendorNotification: false
};

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.PENDING_NOTIFICATIONS: {
            const data = action.payload;
            return {
                ...state,
                pendingNotifications: data,
            };
        }
        case types.IS_VENDOR_NOTIFICATIONS: {
            const data = action.payload;
            return {
                ...state,
                isVendorNotification: data,
            };
        }
        case types.UPDATE_VENDOR_NOTIFICATION: {
            const data = action.payload;
            return {
                ...state,
                updateNotification: data,
            };
        }
        default: {
            return { ...state };
        }
    }
}
