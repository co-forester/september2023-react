import {createBrowserRouter, Navigate} from "react-router-dom";

import {AlbumsPages} from "./pages/AlbumsPages";
import {TodosPages} from "./pages/TodosPages";
import {CommentsPages} from "./pages/CommentsPages";
import {MainLayout} from "./layouts/MainLayout";
import {PostsPages} from "./pages/PostsPages";

const router =createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {index:true, element: <Navigate to ={'albums'}/>},
            { path: 'todos', element:<TodosPages/>},
            { path: 'albums', element:<AlbumsPages/>},
            { path: 'comments', element:<CommentsPages/>, children: [
                    {path: 'post', element:<PostsPages/>}
                ]},

        ]
    }
]);

export {router}