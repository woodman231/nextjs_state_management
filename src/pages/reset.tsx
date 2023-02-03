import Head from 'next/head'
import { ResetButton as ActionButton } from '@/features/counter/ResetButton'

const pageName = "Reset"

export default function ResetPage() {
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
