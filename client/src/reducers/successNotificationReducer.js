import { createSlice } from '@reduxjs/toolkit';

const successNotificationSlice = createSlice({
    name: 'successNotification',
    initialState: null,
    reducers: {
        notifyOnSuccess(state, action) {
            return action.payload;
        },
    },
});

export const setSuccessNotification = (notification) => {
    return dispatch => {
        dispatch(notifyOnSuccess(notification));
        setTimeout(() => {
            dispatch(notifyOnSuccess(null));
        }, 5000);
    };
};

export const { notifyOnSuccess } = successNotificationSlice.actions;
export default successNotificationSlice.reducer;
