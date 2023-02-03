import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        subtract: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        multiply: (state, action: PayloadAction<number>) => {
            state.value *= action.payload
        },
        divide: (state, action: PayloadAction<number>) => {
            state.value /= action.payload
        },
        reset: (state) => {
            state.value = initialState.value
        }
    }
})

export const {add, subtract, multiply, divide, reset} = counterSlice.actions

export default counterSlice.reducer