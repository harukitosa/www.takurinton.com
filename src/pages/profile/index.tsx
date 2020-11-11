import { PortfolioProps } from '../../props/props'
import { Intern } from '../../component/organisms/Intern'
import { Skill } from '../../component/organisms/Skill'
import { Made } from '../../component/organisms/Made'
import { MineContent } from '../../component/parts/MineContent'
const css = require('../../styles/style/portfolio.scss')
// import portfolio from '../../mock/portfolio.json'

const Profile = (props: PortfolioProps) => {
    const intern = props.intern 
    const skill = props.skill
    const made = props.made
    const mine = props.mine 

    return (
        <div className={css.main}>
            <MineContent {...mine} />
            <Intern intern={intern} />
            <Skill skill={skill} />
            <Made made={made} />
        </div>
    )
  }

Profile.getInitialProps = async () => {
    const res = await fetch("http://localhost:8080/portfolio/v1/")
    return await res.json()
    // return portfolio
}

export default Profile