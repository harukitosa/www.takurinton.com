import { PortfolioProps } from '../../props/props'
import { Intern } from '../../component/common/organisms/Intern'
import { Skill } from '../../component/common/organisms/Skill'
import { Made } from '../../component/common/organisms/Made'
import { MineContent } from '../../component/profile/MineContent'
import { HtmlHead } from '../../component/common/Head'
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

const https = require('https');
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

Profile.getInitialProps = async () => {
    const res = await fetch("https://takurinton.com/portfolio/v1/")
    // const res = await fetch(`https://takurinton-1783974075.ap-northeast-1.elb.amazonaws.com/portfolio/v1/`, { 
        // @ts-ignore    
        // agent: httpsAgent 
    // })
    return await res.json()
    // return portfolio
}

export default Profile