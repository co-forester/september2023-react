import {Outlet} from "react-router-dom";

import {CommentsContainer} from "../components/CommentsContainer/CommentsContainer";

const CommentsPages = () => {
    return (
        <div>
            <Outlet/>
            <CommentsContainer/>
        </div>
    );
};

export {CommentsPages};