import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums'
});

const  getAlbums = ()=> axiosInstance.get('').then(value => value);

export {getAlbums};