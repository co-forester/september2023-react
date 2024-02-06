import {Car} from "../Car/Car";
import css from './Cars.module.css'

const Cars = ({cars, trigger, setCarForUpdate}) => {

    return (
        <div className={css.Cars}>
            {cars.map(car=><Car key={car.id} car={car} trigger={trigger} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};