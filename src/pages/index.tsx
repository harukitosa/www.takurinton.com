import Link from 'next/link'

import { Layout } from '../component/layout/Layout'
import { Pien } from '../component/Character/Pien'
import { Gopher } from '../component/Character/Gopher'


const Main = () => {
    return (
        <div>
          <h1>This page is main</h1>
          <Pien />
          <Gopher />
          <Link href="/profile"><a>profile</a></Link> <br />
          <Link href="/dairyreport"><a>dairyreport</a></Link>
        </div>
    )
}

export default Main