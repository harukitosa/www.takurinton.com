import Link from 'next/link'

import { Layout } from '../../component/layout/Layout'
import { PortfolioProps } from '../../props/props'

import { Intern } from '../../component/organisms/Intern'
import { Skill } from '../../component/organisms/Skill'
import { Made } from '../../component/organisms/Made'
import { MineContent } from '../../component/parts/MineContent'

// import portfolio from '../../mock/portfolio.json'

const Profile = (props: PortfolioProps) => {
    const intern = props.intern 
    const skill = props.skill
    const made = props.made
    const mine = props.mine 

    return (
        <Layout>
            <h1>intern</h1>
            <Intern intern={intern} />
            
            <h1>skill</h1>
            <Skill skill={skill} />

            <h1>made</h1>
            <Made made={made} />

            <h1>mine</h1>
            <MineContent {...mine} />
        </Layout>
    )
  }

Profile.getInitialProps = async () => {
    const res = await fetch("http://localhost:8080/portfolio/v1/")
    return await res.json()
    // return portfolio
}

export default Profile