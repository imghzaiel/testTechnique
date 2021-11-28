import axios from 'axios';

const userUrl = 'hhttp://localhost:8000/api/users';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${userUrl}`);
}

export const addUser = async (user) => {
    return await axios.post(`${userUrl}`, user);
}

export const deleteUser  = async (id) => {
    return await axios.delete(`${userUrl}/${id}`);
}

export const editUser  = async (id, user) => {
    return await axios.put(`${userUrl}/${id}`, user)
}