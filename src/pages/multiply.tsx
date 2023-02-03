import Head from 'next/head'
import { AppStateContext } from "@/context/AppContext";
import { useContext } from "react";

export default function AddPage() {
    const { appState, setAppState } = useContext(AppStateContext);

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
                    setAppState({
                        ...appState,
                        currentCount: appState.currentCount * appState.currentModifier
                    })
                }}>Multiy the current count by {appState.currentModifier}</button>
            </main>
        </>
    )
}