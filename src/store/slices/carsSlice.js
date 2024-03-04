import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: [],
    value: [],
    trigger: true
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {data} = action.payload;
            state.cars = data
        },
        save: async ()=> {
            // await carService.create(initialState.cars);
            // reset();
            // trigger()
        },
        update: async ()=> {
            // await carService.updateById(initialState.cars.byId(id, car));
            // reset();
            // trigger()
        },
        delete:
            async () => {
                    // await carService.delete(id);
                    // trigger()
        },
        trigger: state => {
            state.trigger =!state.trigger
        },
        reset: (state, action) => {

        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {carsReducer, carsActions}