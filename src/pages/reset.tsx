import Head from 'next/head'
import { AppStateContext } from "@/context/AppContext";
import { useContext } from "react";

export default function ResetPage() {
    const { appState, updateAppStateDispatcher } = useContext(AppStateContext);

    return (
        <>
            <Head>
                <title>Reset</title>
            </Head>
            <header>
                <h1>Reset</h1>
            </header>
            <main>
                <button onClick={() => {
                    updateAppStateDispatcher({type:'reset'})
                }}>Reset the current count to 0 and the current modifier to 1</button>
            </main>
        </>
    )
}
