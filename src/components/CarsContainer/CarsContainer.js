import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {carService} from "../../services";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import css from './CarsContainer.module.css'
import {useAppContext} from "../../hooks";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [query, setQuery ] = useSearchParams({page:'1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});
     const {trigger} = useAppContext();

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data}) => {
                setCars(data.items);
                setPrevNext({prev: data.prev, next: data.next})
            }, [trigger, query.get('page')]
        );
    })

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString());
            return prev
        })
    }

    return (
        <div className={css.CarsContainer}>
            <div className={css.Buttons}>
                <button className={css.ButPrev} disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button className={css.ButNext} disabled={!prevNext.next} onClick={next}>next</button>
            </div>
            <CarForm/>
            <Cars cars={cars}/>
        </div>
    );
}

export {CarsContainer};