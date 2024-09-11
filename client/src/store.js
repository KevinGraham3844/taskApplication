import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import errorNotificationReducer from './reducers/errorNotificationReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        errorNotification: errorNotificationReducer,
    },
});

export default store;
