import Head from 'next/head'
import { AppStateContext } from "@/context/AppContext";
import { useContext } from "react";

export default function DividePage() {
    const { appState, updateAppStateDispatcher } = useContext(AppStateContext);

    return (
        <>
            <Head>
                <title>Divide</title>
            </Head>
            <header>
                <h1>Divide</h1>
            </header>
            <main>
                <button onClick={() => {
                    updateAppStateDispatcher({type:'divide'})
                }}>Divide the current count by {appState.currentModifier}</button>
            </main>
        </>
    )
}
