import React from "react";
import { Box } from '@material-ui/core'

import { Header } from '../parts/Header'
import Head from 'next/head';

export const Layout = (props) => (
    <>
        <Head>
            <title>たくりんとん</title>
            <link rel="shortcut icon" href="https://blog.takurinton.com/me.jpg" />
        </Head>
        <style>{`* { margin: 0; padding: 0; }`}</style>
        <Header />
      {props.children}
    </>
);
