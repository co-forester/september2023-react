const Post = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <div>postId: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate('/postDetails', {state: {postId: id}})}>post details</button>
        </div>
    );
};

export {Post};