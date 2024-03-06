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
            state.cars  = action.payload;

        },
        setCarForUpdate: (state, action) => {
            state.CarForUpdate = action.payload
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