import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {CommentsPages} from "./pages/CommentsPages";
import {PostsPage} from "./pages/PostsPage";

const router =createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index:true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, children: [
                    {path: 'posts', element: <PostsPage/>}
                ]},
            {path: 'comments', element: <CommentsPages/>}
        ]
    },

]);

export {router}