import { Home } from '../component/main/Home'
import { Blog } from '../component/blog/Blog'
import { GetPost } from '../props/props'

import { HtmlHead } from '../component/common/Head';

const Main = (res: {res: GetPost, status: number}) => {
    return (
        <div>
            <HtmlHead 
                title={`たくりんとんです夜露死苦`}
                description={`たくりんとんのポートフォリオです`}
                image={`https://www.takurinton.com/me.jpeg`}
                url={`https://www.takurinton.com/`}
            />
            <Home />
            <Blog props={res.res}/>
        </div>
    )
}

Main.getInitialProps = async (context:any) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/blog/v1/${query}`)
    // const res = await fetch(`http://localhost:8080/blog/v1/${query}`)
    const status = res.status
    const response = await res.json()
    return { res: response, status: status }
}
export default Main