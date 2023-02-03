import React from "react"
import type { RootState } from "@/store"
import { useSelector, useDispatch } from 'react-redux'
import { subtract } from './counterSlice'

export function SubtractButton() {
    const currentModifierValue = useSelector((state: RootState) => state.modifier.value)
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(subtract(currentModifierValue))}>
            Subtract {currentModifierValue} from the current count
        </button>
    )
}