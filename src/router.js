import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPages} from "./pages/UsersPages";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index:false, element: <Navigate to ={'users'}/>},
            {path:'users', element: <UsersPages/>}
        ]
    }
])

export {router}