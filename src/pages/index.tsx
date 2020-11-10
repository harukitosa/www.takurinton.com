import Link from 'next/link'
import { Pien } from '../component/Character/Pien'
import { Gopher } from '../component/Character/Gopher'


const Main = () => {
    return (
        <div>
          <h1>This page is main</h1>
          <Pien />
          <Gopher />
        </div>
    )
}

export default Main