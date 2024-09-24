import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import errorNotificationReducer from './reducers/errorNotificationReducer';
import successNotificationReducer from './reducers/successNotificationReducer';
import tasksReducer from './reducers/tasksReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        successNotification: successNotificationReducer,
        errorNotification: errorNotificationReducer,
        tasks: tasksReducer,
    },
});

export default store;
