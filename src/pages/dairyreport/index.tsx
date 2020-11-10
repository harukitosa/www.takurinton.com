import { useRouter } from 'next/router'
import { Box } from '@material-ui/core'

import { Pagination } from '../../component/parts/Pagination'
import { DairyreportContent } from '../../component/parts/Dairtreport'

import { DairyreportProps } from '../../props/props'

import dairyreport from '../../mock/dairyreport.json'

import { DairyreportStyle } from '../../styles/ui/dairyreport'

const Main = (props: DairyreportProps) => {
    const classes = DairyreportStyle()
    const next = props.next 
    const prev = props.prev
    return (
        <Box>
            <h1>dairyreport</h1>
            <Box className={classes.root} >
                <Box className={classes.items}>
                {
                    props.results.map(p => (<DairyreportContent {...p} />))
                }
                </Box>   
                <Pagination next={String(next)} prev={String(prev)} />
            </Box>
        </Box>
    )
}

Main.getInitialProps = async () => {
    const res = await fetch(`https://api.takurinton.com/dairyreport/v1/`)
    return await res.json()
}

export default Main