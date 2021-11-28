import axios from 'axios';

const commentUrl = 'hhttp://localhost:8000/api/comments';


export const getComments = async (id) => {
    id = id || '';
    return await axios.get(`${commentUrl}`);
}

export const addComment = async (comment) => {
    return await axios.post(`${commentUrl}`, comment);
}

export const deleteComment = async (id) => {
    return await axios.delete(`${commentUrl}/${id}`);
}

export const editComment = async (id, comment) => {
    return await axios.put(`${commentUrl}/${id}`, comment)
}