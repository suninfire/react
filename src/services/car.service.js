import {axiosService} from "./axios.service";
import {urls} from "../constans";

const carService = {
    getAll: () => axiosService.get(urls.carsUrl),
    updateById: (id, data) => axiosService.put(`${urls.carsUrl}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.carsUrl}/${id}`),
    createCar: (car) => axiosService.post(urls.carsUrl,car)
}

export {
    carService
}