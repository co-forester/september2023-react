import React, {useEffect, useState} from 'react';

import {Human} from "./Human";

const Humans = () => {
    const [humans, setHumans] = useState([]);
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(({results})=>setHumans(results))
    }, [])
    return (
        <div>
            {humans.map(human=><Human key={human.id} human={human}/>)}
        </div>
    )
};

export {Humans};