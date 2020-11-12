import { DairyreportProps } from '../../props/props'
import { Dairy } from '../../component/dairyreport/Dairy'

const css = require('../../styles/style/dairyreport.scss')

const Main = (props: DairyreportProps) => {
    return (
        <Dairy props={props} />
    )
}

Main.getInitialProps = async (context) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${query}`)
    return await res.json()
    // return dairyreport mock
}

export default Main