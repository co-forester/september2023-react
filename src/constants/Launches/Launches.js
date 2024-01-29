import React, {useEffect, useState} from 'react';

import css from './Launches.module.css'
import {launchService} from "../../services/launchService";
import {Launch} from "../Launch/Launch";

const Launches = () => {
     const[launches, setLaunches]=useState([]);

     useEffect(() =>{
         launchService.getAll()
             .then(({data}) => {const filtered = data.filter(value => value.launch_year !=='2020');
             setLaunches(filtered)})
     }, [])
    return (
        <div className={css.Launches}>
            {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};