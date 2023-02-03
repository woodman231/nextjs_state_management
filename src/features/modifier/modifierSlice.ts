import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import {reset} from "@/features/counter/counterSlice"

export interface ModifierState {
    value: number
}

const initialState: ModifierState = {
    value: 1
}

export const modifierSlice = createSlice({
    name: 'modifier',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    },
    extraReducers: {
        [reset.type]: (
            state
        ) => {
            // When the counter resets then the modifier resets as well
            state.value = initialState.value
        }
    }
});

export const { setValue } = modifierSlice.actions

export default modifierSlice.reducer;