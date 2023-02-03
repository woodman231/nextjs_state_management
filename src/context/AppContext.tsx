import React from 'react'

export interface IAppState {
    currentCount: number
    currentModifier: number
}

const defaultAppState: IAppState = {
    currentCount: 0,
    currentModifier: 1
}

type IAction = 
    | { type: 'add' }
    | { type: 'subtract' }
    | { type: 'multiply' }
    | { type: 'divide' }
    | { type: 'reset' }
    | { type: 'setModifier', payload: number }

function reduer(state: IAppState, action: IAction): IAppState {
    if(action.type) {
        switch(action.type) {
            case 'add': {
                return { ...state, currentCount: state.currentCount + state.currentModifier }
            }
            case 'subtract': {
                return { ...state, currentCount: state.currentCount - state.currentModifier }
            }
            case 'multiply': {
                return { ...state, currentCount: state.currentCount * state.currentModifier }
            }
            case 'divide': {
                return { ...state, currentCount: state.currentCount / state.currentModifier }
            }
            case 'reset': {
                return defaultAppState
            }
            case 'setModifier': {
                return { ...state, currentModifier: action.payload }
            }
        }
    }

    return state;
}

const useValue = () => {
    const [appState, updateAppStateDispatcher] = React.useReducer(reduer, defaultAppState);

    return {
        appState,
        updateAppStateDispatcher
    }
}

interface IAppStateContext extends ReturnType<typeof useValue> {    
}

export const AppStateContext = React.createContext<IAppStateContext>({} as IAppStateContext)

interface ContextProviderProps {
    children: JSX.Element
}

export const AppStateContextProvider: React.FC<ContextProviderProps> = (props) => {
    return(
        <AppStateContext.Provider value={useValue()}>
            {props.children}
        </AppStateContext.Provider>
    )
}

