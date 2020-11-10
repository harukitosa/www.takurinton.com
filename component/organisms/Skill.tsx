import { SkillContent } from '../parts/SkillContent'

import { Box } from '@material-ui/core'
import { SkillProps } from '../../props/props'

const initialProps: SkillProps[] = [
    {
        id: 0, 
        name: ''
    }
]

export const Skill = ({skill = initialProps}) => {
    return (
        <Box>
            {
                skill.map(i => <SkillContent {...i} />)
            }
        </Box>
    )
}