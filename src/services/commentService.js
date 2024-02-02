import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const commentService = {
    getAll:()=> axiosService.get(urls.comments.base),
    create:(data)=> axiosService.post(urls.comments.base, data),
    updateById: (id, data) => axiosService.put(urls.comments.byId(id), data),
    deleteById: (id) => axiosService.delete(urls.comments.byId(id))
}

export {
    commentService
}