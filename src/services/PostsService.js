import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const  getPosts = ()=> axiosInstance.get('/posts').then(value => value);

const  getPostsById = (id)=> axiosInstance.get('/users' + '/' + id + '/posts').then(value => value);

export {getPosts,getPostsById};