import { CommentProps } from "../../../props/props"
const css = require('../../../styles/style/blog.scss')

export const CommentContent = (comment: CommentProps) => {
    return (
        <div className={css.comment}>
            <p className={css.name}>{comment.name}</p>
            <p className={css.date}>{comment.pub_date.substring(0, 10)}</p>
            <span className={css.content}>{comment.contents}</span>
            {/* TODO コメントの投稿時間の整形 */}
            {/* <p>{comment.pub_date}</p> */}
        </div>
    )
}