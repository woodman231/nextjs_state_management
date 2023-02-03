import Head from 'next/head'
import { MultiplyButton as ActionButton } from '@/features/counter/MultiplyButton'

const pageName = "Multiply"

export default function MultiplyPage() {
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
