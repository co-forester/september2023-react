import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = axiosService.get(urls.comments);

export {commentService}