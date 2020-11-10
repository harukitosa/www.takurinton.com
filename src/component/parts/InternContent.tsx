import { InternProps } from '../../props/props'

import { Box, Typography } from '@material-ui/core'


export const InternContent = (content: InternProps) => { 
    return (
        <Box>
            <Typography>
                {content.company_name}
            </Typography>
        </Box>
    )
}