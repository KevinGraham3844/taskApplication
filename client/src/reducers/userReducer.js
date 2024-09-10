import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';
import { setErrorNotification } from './errorNotificationReducer';

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
            console.log('successfully logged in: ', user);
        } catch (exception) {
            dispatch(setErrorNotification('WRONG USERNAME OR PASSWORD'));
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
    };
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
