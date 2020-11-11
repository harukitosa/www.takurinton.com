import { MineProps } from '../../props/props'
import { Heading } from '../common/atoms/Heading'
const css = require('../../styles/style/portfolio.scss')

export const MineContent = (mine: MineProps) => { 
    return (
        <div className={css.selfIntro}>
            <Heading text="Who?" />
            <img src="me.jpeg" />
            <p>{mine.content}</p>
        </div>
    )
}