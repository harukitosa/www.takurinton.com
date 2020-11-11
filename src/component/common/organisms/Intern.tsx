import { InternProps } from '../../../props/props'
import { InternContent } from '../../profile/InternContent'

import { Heading } from '../atoms/Heading'
const css = require('../../../styles/style/portfolio.scss')

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
        <div className={css.component}>
            <Heading text="Intern" />
            {
                intern.map(i => <InternContent {...i} />)
            }
        </div>
    )
}