import { PortfolioProps } from '../../props/props'
import { Intern } from '../../component/organisms/Intern'
import { Skill } from '../../component/organisms/Skill'
import { Made } from '../../component/organisms/Made'
import { MineContent } from '../../component/parts/MineContent'
import { HtmlHead } from '../../component/parts/Head'
const css = require('../../styles/style/portfolio.scss')
import portfolio from '../../../mock/portfolio.json'

const Profile = (props: PortfolioProps) => {
    const intern = props.intern 
    const skill = props.skill
    const made = props.made
    const mine = props.mine 

    return (
        <div>
            <HtmlHead 
                title={'たくりんとん | profile'}
                description={'たくりんとんのポートフォリオです'}
                image={'https://blog.takurinton.com/me.jpg'}
                url={'https://takurinton.com'}
            />

            <div className={css.main}>
            <MineContent {...mine} />
            <Intern intern={intern} />
            <Skill skill={skill} />
            <Made made={made} />
        </div>
        </div>
    )
  }

Profile.getInitialProps = async () => {
    // const res = await fetch("https://api.takurinton.com/portfolio/v1/")
    // return await res.json()
    return portfolio
}

export default Profile