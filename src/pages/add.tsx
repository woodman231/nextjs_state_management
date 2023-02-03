import Head from 'next/head'
import { AddButton as ActionButton } from '@/features/counter/AddButton'

const pageName = "Add"

export default function AddPage() {
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
