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
        updateTask(state, action) {
            const updatedTask = action.payload;
            return state.map(task => (task.id !== updatedTask.id ? task : updatedTask));
        },
        removeTask(state, action) {
            const id = action.payload;
            return state.filter(task => task.id !== id);
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

export const editTask = (taskObject) => {
    return async dispatch => {
        await taskService.changeTask(taskObject);
        dispatch(updateTask(taskObject));
    };
};

export const deleteTask = id => {
    return async dispatch => {
        await taskService.deleteTask(id);
        dispatch(removeTask(id));
    };
};

export const {
 setTasks, appendTasks, updateTask, removeTask,
} = taskSlice.actions;
export default taskSlice.reducer;
