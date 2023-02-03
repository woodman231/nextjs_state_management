import Head from 'next/head'
import { AppStateContext } from "@/context/AppContext";
import { useContext } from "react";

export default function MultiplyPage() {
    const { appState, updateAppStateDispatcher } = useContext(AppStateContext);

    return (
        <>
            <Head>
                <title>Multiply</title>
            </Head>
            <header>
                <h1>Multiply</h1>
            </header>
            <main>
                <button onClick={() => {
                    updateAppStateDispatcher({type:'multiply'})
                }}>Multiply the current count by {appState.currentModifier}</button>
            </main>
        </>
    )
}
