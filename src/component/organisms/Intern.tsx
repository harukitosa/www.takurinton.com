import { InternProps } from '../../props/props'
import { InternContent } from '../parts/InternContent'

import { Heading } from '../atoms/Heading'

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
        <div>
            <Heading text="Intern" />
            {
                intern.map(i => <InternContent {...i} />)
            }
        </div>
    )
}