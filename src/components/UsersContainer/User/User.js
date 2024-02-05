

const User = ({user}) => {
  const {id, name, username, email} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button>getPosts</button>
        </div>
    );
};

export {User};