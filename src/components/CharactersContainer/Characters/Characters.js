import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Character} from "../Character";
import {charactersActions} from "../../../store";
import css from './Characters.module.css'

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector (state => state.characters)
    const {ids} = useParams();

    useEffect( () => {
        dispatch(charactersActions.getByIds(ids))
    }, [ids, dispatch]);

    return (
        <div className={css.Characters}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};