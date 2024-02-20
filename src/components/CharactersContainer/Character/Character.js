const Character = ({character}) => {
   const {id, name, url, species, status, image} = character
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>url: {url}</div>
            <div>species: {species}</div>
            <div>status: {status}</div>
            <div>image: {image}</div>

        </div>
    );
};

export {Character};