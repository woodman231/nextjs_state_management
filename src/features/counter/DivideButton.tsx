import React from "react"
import type { RootState } from "@/store"
import { useSelector, useDispatch } from 'react-redux'
import { divide } from './counterSlice'

export function DivideButton() {
    const currentModifierValue = useSelector((state: RootState) => state.modifier.value)
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(divide(currentModifierValue))}>
            Divide the current count by {currentModifierValue}
        </button>
    )
}