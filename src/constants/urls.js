const  baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
// const comments = '/comments'

const urls = {
    users:{
        base: users,
        // byId: (userId) => `${users}/${userId}`

    },
    posts:{
        // base: posts,
        // ById: (postId) => `${posts}/${postId}`,
        byUserId: (userId)=> `${users}/${userId}/posts`

    },
    comments:{
        // base: comments,
        // ById: (commentId) => `${posts}/${commentId}`,
       byPostId: (postId) => `${posts}/${postId}/comments`
    }
}
export {baseURL, urls}

