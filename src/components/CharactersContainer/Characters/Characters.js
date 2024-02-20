import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {characterService} from "../../../services";
import {Character} from "../Character";
import css from './Characters.module.css'

const Characters = () => {
    const {ids} = useParams();
    const [characters, setCharacters] = useState([]);
    // console.log(ids);
    // console.log(characters);

    useEffect(async () => {
        await characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids]);

    return (
        <div className={css.Characters}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};