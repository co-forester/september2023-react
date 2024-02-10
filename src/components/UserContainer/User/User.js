const User = ({user}) => {
    const {id, name} = user

    return (
        <div>
           <div>id: {id}</div>
           <div>name: {name}</div>
            <button>user detail</button>
        </div>
    );
};

export {User};