import axios from 'axios';

let token = null;

const setToken = newToken => {
    token = `Bearer ${newToken}`;
    console.log(token);
};

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/tasks/'
    : '/api/tasks/';

const getAll = async (userId) => {
    const request = await axios.get(`${baseUrl}/${userId}`);
    return request.data;
};

const createTask = async (taskObject) => {
    console.log(token);
    const config = {
        headers: { Authorization: token },
    };

    const response = await axios.post(baseUrl, taskObject, config);
    return response.data;
};

const changeTask = async (taskObject) => {
    const config = {
        headers: { Authorization: token },
    };
    const response = await axios.put(`${baseUrl}/${taskObject.id}`, taskObject, config);
    return response.data;
};

const deleteTask = async (requestedTaskId) => {
    const config = {
        headers: { Authorization: token },
    };
    const response = await axios.delete(`${baseUrl}/${requestedTaskId}`, config);
    return response.data;
};

export default {
 getAll, setToken, changeTask, createTask, deleteTask,
};
