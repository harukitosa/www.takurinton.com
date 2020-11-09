import Link from 'next/link'
export default function Main() { 
    return (
        <div>
            <h1>This page is main</h1>
            <p><Link href="/profile">mine</Link></p>
            <p><Link href="/dairyreport/">dairyreport</Link></p>
        </div>
    )
}