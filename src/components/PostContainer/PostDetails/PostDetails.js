import {useLocation} from "react-router-dom";

const PostDetails = () => {
      const {state:{postId}}= useLocation()
    console.log(postId);

    return (
        <div>
            PostDetails
        </div>
    );
};

export {PostDetails};