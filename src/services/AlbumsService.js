import {axiosService} from "./axios.service";
import {urls} from "./urls";

const  getAlbums = ()=> axiosService.get(urls.albums).then(value => value);

export {getAlbums};