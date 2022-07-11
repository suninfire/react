import {axiosService} from "./axios.service";
import {urls} from "./urls";


const  getPosts = ()=> axiosService.get(urls.posts).then(value => value);

export {getPosts};