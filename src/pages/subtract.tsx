import Head from 'next/head'
import { AppStateContext } from "@/context/AppContext";
import { useContext } from "react";

export default function AddPage() {
    const { appState, setAppState } = useContext(AppStateContext);

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
                    setAppState({
                        ...appState,
                        currentCount: appState.currentCount - appState.currentModifier
                    })
                }}>Subtract {appState.currentModifier} from the count</button>
            </main>
        </>
    )
}