import Head from 'next/head'
import { DivideButton as ActionButton } from '@/features/counter/DivideButton'

const pageName = "Divide"

export default function DividePage() {
    return (
        <>
            <Head>
                <title>{pageName}</title>
            </Head>
            <header>
                <h1>{pageName}</h1>
            </header>
            <main>
                <ActionButton></ActionButton>
            </main>
        </>
    )
}
