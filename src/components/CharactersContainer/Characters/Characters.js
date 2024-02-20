import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../../services";

const Characters = () => {
    const {ids} = useParams();
    const [characters, setCharacters] = useState([]);
    // console.log(ids);

    useEffect(() => {
        characterService.
    }, []);

    return (
        <div>
            Characters
        </div>
    );
};

export {Characters};