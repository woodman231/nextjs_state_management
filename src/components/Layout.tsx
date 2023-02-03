import Link from "next/link"
import {Counter} from "@/features/counter/Counter"
import { Modifier } from "@/features/modifier/Modifier"

interface LayoutProps {
    children: JSX.Element
}

export default function Layout({children}: LayoutProps): JSX.Element {
    return(
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{
                    border: '1px solid black',
                    padding: '1rem'
                }}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/add">Add</Link>
                        </li>
                        <li>
                            <Link href="/subtract">Subtract</Link>
                        </li>
                        <li>
                            <Link href="/multiply">Multiply</Link>
                        </li>
                        <li>
                            <Link href="/divide">Divide</Link>
                        </li>
                        <li>
                            <Link href="/reset">Reset</Link>
                        </li>
                    </ul>
                </div>
                <div style={{
                    border: '1px solid black',
                    padding: '1rem'
                }}>
                    <Counter /><br />
                    <Modifier />
                    {children}
                </div>
            </div>            
        </>
    )
}
