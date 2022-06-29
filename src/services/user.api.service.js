import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const  getUsers = ()=> axiosInstance.get('');

const getUser = (id) => axiosInstance.get('/' + id);


export {getUsers,getUser};









