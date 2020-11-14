import { MineProps } from '../../../props/props'
const css = require('../../../styles/style/portfolio.scss')

export const MineContent = (mine: MineProps) => { 
    return (
        <div className={css.component}>
            <img src="me.jpeg" alt="me"/>
            <h3>たくりんとん</h3>
            <p>{mine.content}</p>
            <p>Web制作のお仕事募集してます。<br />
                takurinton[at]gmail.com、<br />
                またはTwitterのDMまでお問い合わせください。
            </p>
        </div>
    )
}