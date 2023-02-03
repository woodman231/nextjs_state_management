import Head from 'next/head'
import { SubtractButton as ActionButton } from '@/features/counter/SubtractButton'

const pageName = "Subtract"

export default function SubtractPage() {
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
