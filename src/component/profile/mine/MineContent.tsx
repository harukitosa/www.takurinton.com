import { MineProps } from '../../../props/props'
const css = require('../../../styles/style/portfolio.scss')

export const MineContent = (mine: MineProps) => { 
    return (
        <div className={css.component}>
            <img src="me.jpeg" />
            <h3>たくりんとん</h3>
            <p>{mine.content}</p>
        </div>
    )
}