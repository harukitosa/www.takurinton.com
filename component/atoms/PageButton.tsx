import React from 'react'
import { Link } from '@material-ui/core'

export const PageButton = ({ css = '', to = '', char = '' }) => {
    return (
        <Link variant="h5" className={css} href={to}>{char}</Link>
    )
}