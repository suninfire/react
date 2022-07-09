import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

const  getComments = ()=> axiosInstance.get('').then(value => value);

export {getComments};