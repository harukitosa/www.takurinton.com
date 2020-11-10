import React from 'react';

import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'


import { HeaderStyle } from '../../styles/ui/header'

import css from '../../styles/style/header.scss'

export const Header = () => {
    return (
        <div className={css.header}>
            <p className={css.title}>
                <Link href="/"><a className={css.link}>takurinton.com</a></Link>
            </p>
        </div>
    )
}

