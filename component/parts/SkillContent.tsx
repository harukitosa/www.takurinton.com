import { SkillProps } from '../../props/props'

import { Box, Typography } from '@material-ui/core'


export const SkillContent = (content: SkillProps) => { 
    return (
        <Box>
            <Typography>
                {content.name}
            </Typography>
        </Box>
    )
}