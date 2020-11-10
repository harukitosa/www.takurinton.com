import { MineProps } from '../../props/props'

import { Heading } from '../atoms/Heading'

export const MineContent = (mine: MineProps) => { 
    return (
        <div>
            <Heading text="Self introduction" />
            {mine.content}
        </div>
    )
}