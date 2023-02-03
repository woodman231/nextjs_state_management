import React from 'react'
import type { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from './modifierSlice'

export function Modifier() {
    const modifierValue = useSelector((state: RootState) => state.modifier.value)
    const dispatch = useDispatch();

    return (
        <>
            Modifier <input type="number" min="1" max="20" value={modifierValue} onChange={(e) => {
                dispatch(setValue(parseInt(e.target.value)))
            }} />
        </>
    )
}