import axios from 'axios';

const baseUrl = '/api/users';

const newUserCreation = async (userInfo) => {
    const response = await axios.post(baseUrl, userInfo);
    console.log(response.data);
    return response.data;
};

export default { newUserCreation };
