
import {Car} from "../Car";
import css from './Cars.module.css'

const Cars = ({cars,  setCarForUpdate}) => {

    return (
        <div className={css.Cars}>
            {cars.map(car=><Car key={car.id} car={car}  setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};