import Link from 'next/link'

import { Box } from '@material-ui/core'
import { Dairyreport } from '../../props/props'

import { DairyreportContentStyle } from '../../styles/ui/dairyreport'

export const DairyreportContent = (dairyreport: Dairyreport) => {
    const classes = DairyreportContentStyle()
    const pubDate = dairyreport.pub_date.substring(0, 10)
    return (
        <Box className={classes.root}>
            <Link href="/dairyreport/post/[id]" as={`/dairyreport/post/${dairyreport.id}`}>
                <a>{pubDate}</a>
            </Link>
        </Box>
    )
}