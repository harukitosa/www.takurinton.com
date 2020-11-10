import React from 'react';

import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'


import { HeaderStyle } from '../../styles/ui/header'

export const Header = () => {
    const classes = HeaderStyle()
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    <Link href="/"><a className={classes.link}>takurinton.com</a></Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

