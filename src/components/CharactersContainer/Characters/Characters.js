import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {charactersActions} from "../../../store";
import {Character} from "../Character";
import css from './Characters.module.css'

const Characters = () => {
    const {ids} = useParams();
    const dispatch = useDispatch();
    const {characters} = useSelector (state => state.characters)

    useEffect(() => {
        dispatch(charactersActions.getAll({ids}))
    }, [ids]);

    return (
        <div className={css.Characters}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};