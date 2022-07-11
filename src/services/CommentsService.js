import {axiosService} from "./axios.service";


const  getComments = (id)=> axiosService.get('/posts/' + id + '/comments' ).then(value => value);

export {getComments};