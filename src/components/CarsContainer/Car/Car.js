

import {carService} from "../../../services/carService";
import css from './Car.module.css'


const Car = ({car, trigger, setCarForUpdate}) => {
   const {id, brand, price, year} = car;


   const Delete = async () => {
     await carService.delete(id);
      trigger()
   }


    return (
        <div className={css.Car}>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div className={css.Buttons}>
                <button className={css.ButUpdate} onClick={()=>setCarForUpdate(car)}>update</button>
                <button className={css.ButDelete} onClick={Delete}>delete</button>
            </div>
        </div>
    );
};

export {Car};