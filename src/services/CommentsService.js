import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


const  getComments = (id)=> axiosInstance.get('/posts/' + id + '/comments' ).then(value => value);

export {getComments};