import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPages} from "./pages/UsersPages";
import {MainLayout} from "./layouts/MainLayout";
import {UserDetails} from "./components/UserContainer/UserDetails/UserDetails";
import {PostDetails} from "./components/PostContainer/PostDetails/PostDetails";
import {CommentPages} from "./pages/CommentPages";
import {UserContainer} from "./components/UserContainer/UserContainer";
import {PostContainer} from "./components/PostContainer/PostContainer";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to ={''}/>},
            {path: 'users', element: <UsersPages/>, children: [
                    {path: 'userContainer', element: <UserContainer/>},
                    {path: 'userDetails',element: <UserDetails/>}
                ]},
            {path: 'posts', element: <PostContainer/>, children:[
                    {path: 'postDetails', element: <PostDetails/>, children: [
                            {path: 'comments', element: <CommentPages/>}
                        ]}
                ]}
        ]
    }
])

export {router}