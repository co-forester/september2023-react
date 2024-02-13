import {useLocation} from "react-router-dom";

import {CommentContainer} from "../components/CommentContainer/CommentContainer";

const CommentPages = () => {
   const {state:{id}} = useLocation()
    console.log(id)
    return (
        <div>
            <CommentContainer id={id}/>
        </div>
    );
};

export {CommentPages};