import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const  todoService = axiosService.get(urls.todos);

export {todoService}