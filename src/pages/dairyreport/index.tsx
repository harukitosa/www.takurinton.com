import { Pagination } from '../../component/common/parts/Pagination'
import { DairyreportContent } from '../../component/common/parts/Dairtreport'
import { DairyreportProps } from '../../props/props'
import { HtmlHead } from '../../component/common/Head'
import dairyreport from '../../../mock/dairyreport.json'
import { Heading } from '../../component/common/atoms/Heading'

const css = require('../../styles/style/dairyreport.scss')


const Main = (props: DairyreportProps) => {
    const next = props.next 
    const prev = props.prev
    return (
        <div>
            <HtmlHead 
                title={'たくりんとん | 日報'}
                description={'たくりんとんのポートフォリオです'}
                image={'https://blog.takurinton.com/me.jpg'}
                url={'https://takurinton.com'}
            />
            <div className={css.main}>
            <Heading text="Dairy report" />
            <div className={css.home} >
                <div className={css.items}>
                {
                    props.results.map(p => (<DairyreportContent {...p} />))
                }
                </div>   
                <Pagination next={String(next)} prev={String(prev)} />
            </div>
        </div>
        </div>

    )
}

Main.getInitialProps = async (context) => {
    // const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    // const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${query}`)
    // return await res.json()
    return dairyreport
}

export default Main