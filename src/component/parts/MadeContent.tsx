import { MadeProps } from '../../props/props'

import { Box, Typography } from '@material-ui/core'


export const MadeContent = (content: MadeProps) => { 
    return (
        <Box>
            <Typography>
                {content.name}
            </Typography>
        </Box>
    )
}