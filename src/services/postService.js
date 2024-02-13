import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const postService = {
    // getAll: () => apiService.get(urls.posts.base),
    // getById: (id) => apiService.get(urls.posts.byId(id)),
    getPostsByUserId: (id) => apiService.get(urls.posts.byUserId(id))
}

export {postService}