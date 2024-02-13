import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const userService = {
    // getById: (id) => apiService.get(urls.users.byId(id)),
    getAll: () => apiService.get(urls.users.base)
}

export {userService}