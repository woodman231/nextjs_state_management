import React from "react"
import type {RootState} from "@/store"
import { useSelector } from 'react-redux'

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    
    return(
        <>
            Current Count: {count}
        </>
    )
}