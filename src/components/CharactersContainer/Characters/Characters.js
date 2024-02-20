import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {characterService} from "../../../services";

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
            characters.map(character)
        </div>
    );
};

export {Characters};