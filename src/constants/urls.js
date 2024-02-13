const  baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';


const urls = {
    users:{
        base: users,
        byId: (userId) => `${users}/${userId}`,
        postsUserId: (userId)=> `${users}/${userId}/posts`
    },
    // posts:{
    //     base: posts,
    //     ByUserId: () => ``
    //
    // },
    comments:{
        // base: comments,
        ByPostId: (postId) => `${posts}/${postId}/comments`
    }
}
export {baseURL, urls}

