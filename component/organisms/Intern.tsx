import { InternProps } from '../../props/props'
import { InternContent } from '../parts/InternContent'

import { Box } from '@material-ui/core'

const initialProps: InternProps[] = [
    {
        id: 0, 
        company_name: '', 
        overview: '', 
        period: '' 
    }
]

export const Intern = ({intern = initialProps}) => {
    return (
        <Box>
            {
                intern.map(i => <InternContent {...i} />)
            }
        </Box>
    )
}