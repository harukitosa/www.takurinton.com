import css from '../../styles/style/home.scss'

export const Twitter = () => {
    return (
        <a href="https://twitter.com/takurinton" >
            <img src="https://s3-ap-northeast-1.amazonaws.com/blog.takurinton.com/twitter.png" className={css.snsicon} alt=""/>
        </a>
    )
}

export const GitHub = () => {
    return (
        <a href="https://github.com/takurinton">
            <img src="https://blog.takurinton.com/GitHub-Mark-64px.png" className={css.snsicon} alt=""/>
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
            <img src="https://blog.takurinton.com/me.jpg" className={css.snsicon} alt=""/>
        </a>
    )
}

