import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const commentService = {
    //getAll: () => apiService.get(urls.comments.base),
    // getById: (id) => apiService.get(urls.comments.byId(id)),
    getCommentsByPostId:(postId) => apiService.get(urls.comments.byPostId(postId))
}

export {commentService}