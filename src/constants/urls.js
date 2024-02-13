const  baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
// const posts = '/posts';


const urls = {
    users:{
        base: users,
        byId: (idUser) => `${users}/${idUser}`,
        postsUserId: (idUser)=> `${users}/${idUser}/posts`
    },
    // posts:{
    //     base: posts,
    //     postById: () => ``
    //
    // }
}
export {baseURL, urls}

