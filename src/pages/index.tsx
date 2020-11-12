import { Home } from '../component/main/Home'
import { Blog } from '../component/blog/Blog'

const Main = ({ res }) => {
    return (
        <div>
            <Home />
            <Blog props={res}/>
        </div>
    )
}

Main.getInitialProps = async (context) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/blog/v1/${query}`)
    const response = await res.json()
    return { res: response, q: query }
}
export default Main