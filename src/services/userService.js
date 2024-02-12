import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    // getById: (id) => apiService.get(urls.users.byId(id)),
    postsByUserId: (id) => apiService.get(urls.users.postsUserId(id))
}

export {userService}