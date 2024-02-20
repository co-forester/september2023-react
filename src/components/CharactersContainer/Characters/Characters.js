import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {characterService} from "../../../services";
import {Character} from "../Character";

const Characters = () => {
    const {ids} = useParams();
    const [characters, setCharacters] = useState([]);
    // console.log(ids);
    // console.log(characters);

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids]);

    return (
        <div>
            characters.map(character=><Character key={character.id} character={character}/>)
        </div>
    );
};

export {Characters};