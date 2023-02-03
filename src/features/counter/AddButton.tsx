import React from "react"
import type { RootState } from "@/store"
import { useSelector, useDispatch } from 'react-redux'
import { add } from './counterSlice'

export function AddButton() {
    const currentModifierValue = useSelector((state: RootState) => state.modifier.value)
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(add(currentModifierValue))}>
            Add {currentModifierValue} to the current count
        </button>
    )
}