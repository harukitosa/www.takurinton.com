import { PageButton } from '../atoms/PageButton'

const css = require('../../../styles/style/dairyreport.scss')

export const Pagination = ({ what = null, next = null, prev = null, category = null }) => {
    const nextButton = next === 'null' ? <></> : <PageButton css={css.nextButton} what={what} to={next} category={category} char='prev week' />
    const previousButton = prev === 'null' ? <></> : <PageButton css={css.prevButton} what={what} to={prev} category={category} char='next week' />
    return ( 
        <div className={css.pagination}>
            {nextButton}
            {previousButton}
        </div>
    )
}
