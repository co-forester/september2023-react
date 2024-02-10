const  baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts'

const urls = {
    users:{
        base: users,
        byId: (idUser) => `${users}/${idUser}`
    },
    posts:{
        base: posts,

    }
}
export {baseURL, urls}

