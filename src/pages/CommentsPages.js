import {CommentsContainer} from "../components/CommentsContainer/CommentsContainer";
import {PostContainer} from "../components/PostContainer/PostContainer";
import {Outlet} from "react-router-dom";

const CommentsPages = () => {
    return (
        <div>
            <Outlet/>
            <CommentsContainer/>
        </div>
    );
};

export {CommentsPages};