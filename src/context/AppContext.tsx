import React from 'react'

export interface IAppState {
    currentCount: number
    currentModifier: number
}

const useValue = () => {
    const [appState, setAppState] = React.useState<IAppState>({currentCount: 0, currentModifier: 1});

    return {
        appState,
        setAppState
    }
}

interface IAppStateContext extends ReturnType<typeof useValue> {    
}

export const AppStateContext = React.createContext<IAppStateContext>({} as IAppStateContext)

interface ContextProviderProps {
    children: JSX.Element
}

export const AppStateContextProvider: React.FC<ContextProviderProps> = (props) => {
    return (
        <AppStateContext.Provider value={useValue()}>
            {props.children}
        </AppStateContext.Provider>
    )
}
