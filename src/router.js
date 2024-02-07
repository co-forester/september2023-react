import {createBrowserRouter, Navigate} from "react-router-dom";

import {AlbumsPages} from "./pages/AlbumsPages";
import {TodosPages} from "./pages/TodosPages";
import {CommentsPages} from "./pages/CommentsPages";

const router =createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {index:true, element: <Navigate to ={'albums'}/>},
            { path: 'todos', element:<TodosPages/>},
            { path: 'albums', element:<AlbumsPages/>},
            { path: 'comments', element:<CommentsPages/>},

        ]
    }
]);

export {router}