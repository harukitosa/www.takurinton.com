import { CommentProps } from "../../../props/props"

export const CommentContent = (comment: CommentProps) => {
    return (
        <div>
            <p>{comment.name}</p>
            <p>{comment.contents}</p>
        </div>
    )
}