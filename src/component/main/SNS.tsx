const css = require('../../styles/style/home.scss')

export const Twitter = () => {
    return (
        <a href="https://twitter.com/takurinton" >
            <img src="twitter.png" className={css.snsicon} alt=""/>
        </a>
    )
}

export const GitHub = () => {
    return (
        <a href="https://github.com/takurinton">
            <img src="github.png" className={css.snsicon} alt=""/>
        </a>
    )
}

export const Facebook = () => {
    return (
        <a href="https://facebook.com/takurinton">
            <img src="" className={css.snsicon} alt=""/>
        </a>
    )
}

export const Blog = () => {
    return (
        <a href="https://blog.takurinton.com">
            <img src="me.jpeg" className={css.snsicon} alt=""/>
        </a>
    )
}

