import Link from 'next/link'
import { Pien } from '../component/Character/Pien'
import { Gopher } from '../component/Character/Gopher'
import { Welcome } from '../component/parts/Welcome'


const Main = () => {
    return (
        <div>
          <Gopher />
          <Welcome />
        </div>
    )
}

export default Main