import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const  getUsers = ()=> axiosInstance.get('').then(value => value);

const getUser = (id) => axiosInstance.get('/' + id).then(value => value.data);

export {getUsers,getUser};









