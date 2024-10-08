import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';
import { setErrorNotification } from './errorNotificationReducer';
import userService from '../services/user';
import taskService from '../services/task';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload;
        },
    },
});

export const loginUser = (username, password) => {
    return async dispatch => {
        try {
            const user = await loginService.login({
                username,
                password,
            });

            window.localStorage.setItem('loggedUser', JSON.stringify(user));
            dispatch(setUser(user));
            taskService.setToken(user.token);
            console.log('successfully logged in: ', user);
        } catch (exception) {
            dispatch(setErrorNotification('WRONG USERNAME OR PASSWORD'));
        }
    };
};

export const createNewUser = (userInfo) => {
    return async dispatch => {
        try {
            await userService.newUserCreation(userInfo);
        } catch (error) {
            if (error) {
                console.log(error.response.data.error);
                dispatch(setErrorNotification(error.response.data.error));
            }
        }
    };
};

export const retainUser = user => {
    return dispatch => {
        dispatch(setUser(user));
    };
};

export const logoutUser = () => {
    return dispatch => {
        window.localStorage.clear();
        dispatch(setUser(null));
        taskService.setToken(null);
    };
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
