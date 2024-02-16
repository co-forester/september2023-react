import {createBrowserRouter, Navigate} from "react-router-dom";


import {ErrorPage} from "./pages/ErrorPage";
import {PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";
import {MainLayout} from "./layouts";



const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/> , children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'users/:id', element: <UserDetailsPage/>, children: [

                ]
            },
            {
                path: 'users/:id/posts', element: <PostsPage/>
            },
            {
                path: 'posts/:id', element: <PostDetailsPage/>
            }
        ]
    }
]);


export {router}