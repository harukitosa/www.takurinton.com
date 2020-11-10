import React from 'react'
import { Box } from '@material-ui/core'
import { PaginitionStyle } from '../../styles/ui/pagination'

import { PageButton } from '../atoms/PageButton'

export const Pagination = ({ next = null, prev = null }) => {
    const classes = PaginitionStyle()
    const nextButton = next === 'null' ? <></> : <PageButton css={classes.nextButton} to={next} char='prev week' />
    const previousButton = prev === 'null' ? <></> : <PageButton css={classes.previousButton} to={prev} char='next week' />
    return ( 
        <Box className={classes.root}>
            {nextButton}
            {previousButton}
        </Box>
    )
}
