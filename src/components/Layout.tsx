import Link from "next/link"
import { AppStateContext } from '@/context/AppContext'
import { useContext } from "react"

interface LayoutProps {
    children: JSX.Element
}

export default function Layout({children}: LayoutProps): JSX.Element {
    const {appState, updateAppStateDispatcher} = useContext(AppStateContext);

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
                    Current Count: {appState.currentCount}<br />
                    Current Modifier: <input type="number" min="0" max="20" value={appState.currentModifier} onChange={(e) => {
                        updateAppStateDispatcher({type: 'setModifier', payload: parseInt(e.target.value)})
                    }} /><br/>
                    {children}
                </div>
            </div>            
        </>
    )
}
