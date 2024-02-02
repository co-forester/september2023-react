import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const commentService = {
    getAll:()=>axiosService.get(urls.comments.base),
    create:(data)=>axiosService.post(urls.comments.base, data)
}

export {
    commentService
}