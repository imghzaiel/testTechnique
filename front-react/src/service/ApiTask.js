import axios from 'axios';

const taskUrl = 'hhttp://localhost:8000/api/tasks';


export const getTasks = async (id) => {
    id = id || '';
    return await axios.get(`${taskUrl}`);
}

export const addTask = async (task) => {
    return await axios.post(`${taskUrl}`, task);
}

export const deleteTask = async (id) => {
    return await axios.delete(`${taskUrl}/${id}`);
}

export const editTask = async (id, task) => {
    return await axios.put(`${taskUrl}/${id}`, task)
}