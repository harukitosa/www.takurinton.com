import { Pagination } from '../../component/parts/Pagination'
import { DairyreportContent } from '../../component/parts/Dairtreport'

import { DairyreportProps } from '../../props/props'

// import dairyreport from '../../mock/dairyreport.json'
import { Heading } from '../../component/atoms/Heading'

import css from '../../styles/style/dairyreport.scss'


const Main = (props: DairyreportProps) => {
    console.log(props)
    const next = props.next 
    const prev = props.prev
    return (
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
    )
}

Main.getInitialProps = async (context) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${query}`)
    return await res.json()
}

export default Main