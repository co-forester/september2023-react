import {Posts} from "../components/PostsContainer/Posts/Posts";
import {useLocation} from "react-router-dom";


const PostsPage = () => {

    const {state: userId} = useLocation();
    console.log(userId)
    return (
        <div>
            <Posts userId={userId}/>
        </div>
    );
};

export {PostsPage};