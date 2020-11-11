import { MadeContent } from '../../profile/MadeContent'

import { MadeProps } from '../../../props/props'
import { Heading } from '../atoms/Heading'
const initialProps: MadeProps[] = [
    {
        id: 0, 
        name: "", 
        url: "", 
        explanation: ""

    }
]

export const Made = ({made = initialProps}) => {
    return (
        <div>
            <Heading text="Made" />
            {
                made.map(i => <MadeContent {...i} />)
            }
        </div>
    )
}