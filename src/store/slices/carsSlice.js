import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {data} = action.payload;
            state.cars = data
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {carsReducer, carsActions}