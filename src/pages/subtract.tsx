import Head from 'next/head'
import { AppStateContext } from "@/context/AppContext";
import { useContext } from "react";

export default function SubtractPage() {
    const { appState, updateAppStateDispatcher } = useContext(AppStateContext);

    return (
        <>
            <Head>
                <title>Subtract</title>
            </Head>
            <header>
                <h1>Subtract</h1>
            </header>
            <main>
                <button onClick={() => {
                    updateAppStateDispatcher({type:'subtract'})
                }}>Subtract {appState.currentModifier} from the count</button>
            </main>
        </>
    )
}
