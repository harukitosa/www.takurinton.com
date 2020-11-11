import { MineProps } from '../../props/props'
import { Heading } from '../atoms/Heading'
const css = require('../../styles/style/portfolio.scss')

export const MineContent = (mine: MineProps) => { 
    return (
        <div className={css.selfIntro}>
            <Heading text="Who?" />
            <img src="https://blog.takurinton.com/me.jpg" />
            <p>{mine.content}</p>
        </div>
    )
}