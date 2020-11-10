import { useRouter } from 'next/router'
import { Box } from '@material-ui/core'

import { Pagination } from '../../component/parts/Pagination'
import { DairyreportContent } from '../../component/parts/Dairtreport'

import { DairyreportProps } from '../../props/props'

import dairyreport from '../../mock/dairyreport.json'

import { DairyreportStyle } from '../../styles/ui/dairyreport'

const Main = (props: DairyreportProps) => {
    console.log(props)
    const classes = DairyreportStyle()
    const next = props.next 
    const prev = props.prev
    return (
        <Box>
            <h1 style={{ textAlign: "center" }}>dairyreport</h1>
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

Main.getInitialProps = async (context) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${query}`)
    return await res.json()
}

export default Main