import React from "react"
import type { RootState } from "@/store"
import { useSelector, useDispatch } from 'react-redux'
import { multiply } from './counterSlice'

export function MultiplyButton() {
    const currentModifierValue = useSelector((state: RootState) => state.modifier.value)
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(multiply(currentModifierValue))}>
            Multiply the current count by {currentModifierValue}
        </button>
    )
}