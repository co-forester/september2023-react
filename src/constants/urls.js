const  baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts'

const urls = {
    users:{
        base: users,
        byId: (idUser) => `${users}/${idUser}`,
        postsByUserId: (id) => `${users}/${id}/posts`
    },
    posts:{
        base: posts,
        postById: () => ``

    }
}
export {baseURL, urls}

