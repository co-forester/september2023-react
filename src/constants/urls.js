const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';


 const urls = {
     base: posts,
     postId: (id) => `${posts}/${id}`
 }

 export {
     baseURL, urls
 }



