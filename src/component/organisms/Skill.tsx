import { SkillContent } from '../parts/SkillContent'

import { SkillProps } from '../../props/props'
import { Heading } from '../atoms/Heading'

const initialProps: SkillProps[] = [
    {
        id: 0, 
        name: ''
    }
]

export const Skill = ({skill = initialProps}) => {
    return (
        <div>
            <Heading text="Skill" />
            {
                skill.map(i => <SkillContent {...i} />)
            }
        </div>
    )
}