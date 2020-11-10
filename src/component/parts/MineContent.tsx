import { MineProps } from '../../props/props'

import { Box, Typography } from '@material-ui/core'


export const MineContent = (mine: MineProps) => { 
    return (
        <Box>
            <Typography>
                {mine.content}
            </Typography>
        </Box>
    )
}