import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const userService = {
    getAll:()=>axiosService.get(urls.users.base),
    create:(data)=>axiosService.post(urls.users.base, data),
    updateById:(id, data) => axiosService.put(urls.users.byId(id), data),
    deleteById:(id) => axiosService.delete(urls.users.byId(id))
}

export {
    userService
}