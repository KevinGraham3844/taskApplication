import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/users'
    : '/api/users';

const newUserCreation = async (userInfo) => {
    const response = await axios.post(baseUrl, userInfo);
    console.log(response.data);
    return response.data;
};

export default { newUserCreation };
