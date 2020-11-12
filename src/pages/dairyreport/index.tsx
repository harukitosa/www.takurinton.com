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
                image={'me.jpg'}
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

const https = require('https');
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

Main.getInitialProps = async (context) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://takurinton.com/dairyreport/v1/${query}`)
    // const res = await fetch(`https://takurinton-1783974075.ap-northeast-1.elb.amazonaws.com/dairyreport/v1/${query}`, { 
    //     // @ts-ignore
    //     agent: httpsAgent 
    // })
    return await res.json()
    // return dairyreport
}

export default Main