import {apiService} from "./apiService";
import {urls} from "../constants";

const  characterService = {
    getAll: () => apiService.get(urls.characters.base)
}

export {characterService}