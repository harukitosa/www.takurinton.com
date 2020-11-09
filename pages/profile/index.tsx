import React from 'react'

import Link from 'next/link'

export default function Profile() {
    return (
        <div>
            profile page <br />
            my name is takurinton <br />
            <Link href="/">
                <a>home</a>
            </Link>
        </div>
    )
}