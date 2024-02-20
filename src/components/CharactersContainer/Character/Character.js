import css from './Character.module.css'

const Character = ({character}) => {
   const {id, name, species, status, image} = character
    return (
        <div className={css.CharacterBlock}>
            <div className={css.Character}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>species: {species}</div>
                <div>status: {status}</div>
            </div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};