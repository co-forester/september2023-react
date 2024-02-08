import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const albumService = axiosService.get(urls.albums);

export {albumService}