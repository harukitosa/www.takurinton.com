import { PageButton } from '../atoms/PageButton'

const css = require('../../styles/style/dairyreport.scss')

export const Pagination = ({ next = null, prev = null }) => {
    const nextButton = next === 'null' ? <></> : <PageButton css={css.nextButton} to={next} char='prev week' />
    const previousButton = prev === 'null' ? <></> : <PageButton css={css.prevButton} to={prev} char='next week' />
    return ( 
        <div className={css.pagination}>
            {nextButton}
            {previousButton}
        </div>
    )
}
