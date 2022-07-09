import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const  getUsers = ()=> axiosInstance.get('').then(value => value);

export {getUsers};