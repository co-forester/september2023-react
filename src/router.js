import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPages} from "./pages/UsersPages";
import {MainLayout} from "./layouts/MainLayout";
import {UserDetails} from "./components/UserContainer/UserDetails/UserDetails";
import {PostPages} from "./pages/PostPages";
import {PostDetails} from "./components/PostContainer/PostDetails/PostDetails";
import {CommentPages} from "./pages/CommentPages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to ={'users'}/>},
            {path: 'users', element: <UsersPages/>, children: [
                    {path: 'userDetails',element: <UserDetails/>}
                ]},
            {path: 'posts', element: <PostPages/>, children:[
                    {path: 'postDetails', element: <PostDetails/>, children: [
                            {path: 'comments', element: <CommentPages/>}
                        ]}
                ]}
        ]
    }
])

export {router}