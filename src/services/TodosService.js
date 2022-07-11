import {axiosService} from "./axios.service";

import {urls} from "./urls";



const  getTodos = ()=> axiosService.get(urls.todos).then(value => value);

export {getTodos};