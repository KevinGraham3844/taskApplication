import { createSlice } from '@reduxjs/toolkit';
import taskService from '../services/task';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        setTasks(state, action) {
            return action.payload;
        },
        appendTasks(state, action) {
            state.push(action.payload);
        },
    },
});

export const initalizeTasks = (userId) => {
    return async dispatch => {
        const tasks = await taskService.getAll(userId);
        dispatch(setTasks(tasks));
    };
};

export const newTask = (content) => {
    return async dispatch => {
        const updatedContent = { ...content, dueDate: content.dueDate.toISOString().split('T')[0] };
        const task = await taskService.createTask(updatedContent);
        dispatch(appendTasks(task));
    };
};

export const clearTasks = () => {
    return dispatch => {
        dispatch(setTasks([]));
    };
};

export const { setTasks, appendTasks } = taskSlice.actions;
export default taskSlice.reducer;
