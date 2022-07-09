import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
});

const  getTodos = ()=> axiosInstance.get('').then(value => value);

export {getTodos};