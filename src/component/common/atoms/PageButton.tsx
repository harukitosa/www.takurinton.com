import React from 'react'
import Link from 'next/link'
export const PageButton = ({ css = '', to = '', char = '' }) => {
    return (
        <Link href={{ pathname: '/dairyreport', query: { page: to } }}>
            <a className={css}>{char}</a>
        </Link>
    )
}