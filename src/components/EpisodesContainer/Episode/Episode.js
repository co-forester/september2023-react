import React from 'react';

import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();

    const ids = characters.map(characters => characters.split('/').splice(-1)[0]).join();

    return (
        <div onClick={()=>navigate(`/characters/${ids}`)} className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>

        </div>
    );
};

export {Episode};