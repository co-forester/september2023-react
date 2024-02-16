import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";



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
                    {
                        path: 'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path: 'posts/:id', element: <PostDetailsPage/>
            }
        ]
    }
]);


export {router}