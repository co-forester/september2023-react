import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPages} from "./pages/UsersPages";
import {MainLayout} from "./layouts/MainLayout";
import {UserDetails} from "./components/UserContainer/UserDetails/UserDetails";
import {PostDetails} from "./components/PostContainer/PostDetails/PostDetails";
import {CommentPages} from "./pages/CommentPages";
import {ErrorPage} from "./pages/ErrorPage";
import {UserPosts} from "./components/UserContainer/UserPosts/UserPosts";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/> , children: [
            {index: true, element: <Navigate to ={''}/>},
            {path: 'users', element: <UsersPages/>},
            {path: 'userDetails',element: <UserDetails/>},
            {path: 'userPosts', element: <UserPosts/>},
            {path: 'postDetails', element: <PostDetails/>, children: [
                            {path: 'comments', element: <CommentPages/>}
                        ]}

        ]
    }
])

export {router}