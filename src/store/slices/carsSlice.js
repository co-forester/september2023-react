import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            const {data} = action.payload;
            state.cars = data
        },
        setCarForUpdate: (state, actions) => {
            state.CarForUpdate = actions.payload
        },
        trigger: state => {
            state.trigger =!state.trigger
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {carsReducer, carsActions}