import { MadeContent } from '../parts/MadeContent'

import { Box } from '@material-ui/core'
import { MadeProps } from '../../props/props'

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
        <Box>
            {
                made.map(i => <MadeContent {...i} />)
            }
        </Box>
    )
}