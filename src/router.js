import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPages} from "./pages/UsersPages";
import {MainLayout} from "./layouts/MainLayout";
import {UserDetails} from "./components/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to ={'users'}/>},
            {path: 'users', element: <UsersPages/>, children: [
                    {path: 'userDetail',element: <UserDetails/>}
                ]}
        ]
    }
])

export {router}