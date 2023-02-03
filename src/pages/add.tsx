import Head from 'next/head'
import { AppStateContext } from "@/context/AppContext";
import { useContext } from "react";

export default function AddPage() {
    const { appState, setAppState } = useContext(AppStateContext);

    return (
        <>
            <Head>
                <title>Add</title>
            </Head>
            <header>
                <h1>Add</h1>
            </header>
            <main>
                <button onClick={() => {
                    setAppState({
                        ...appState,
                        currentCount: appState.currentCount + appState.currentModifier
                    })
                }}>Add {appState.currentModifier} to the count</button>
            </main>
        </>
    )
}