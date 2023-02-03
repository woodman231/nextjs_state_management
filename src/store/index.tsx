import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'
import modifierReducer from '../features/modifier/modifierSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        modifier: modifierReducer,
    },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Infer the type {counter: value:0, modifier: value: 1}
export type AppDispatch = typeof store.dispatch