import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const  getPosts = ()=> axiosInstance.get('').then(value => value);

export {getPosts};