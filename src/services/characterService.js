import {apiService} from "./apiService";

import {urls} from "../constants";


const  characterService = {
    // getAll: () => apiService.get(urls.characters.base),
    getByIds: (ids) => apiService.get(urls.characters.byIds(ids))
}

export {characterService}