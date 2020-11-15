import { DairyreportProps } from '../../props/props'
import { Dairy } from '../../component/dairyreport/Dairy'
import { Error } from '../_error'
const css = require('../../styles/style/dairyreport.scss')

const Main = (res: { res: DairyreportProps, status: number }) => {
    if (res.status >= 400) {
        return <Error status={res.status} />
    }

    return (
        <Dairy props={res.res} />
    )
}

Main.getInitialProps = async (context: any) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${query}`)
    const response = await res.json()
    return { res: response, status: res.status }
    // return dairyreport mock
}

export default Main