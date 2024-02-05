import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {CommentsPages} from "./pages/CommentsPages";

const router =createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index:true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'comments', element: <CommentsPages/>}
        ]
    },

]);

export {router}