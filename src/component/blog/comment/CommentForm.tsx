import { Submit } from '../../common/atoms/Submit'

export const CommentForm = (value: {state: any, onChange: any, onSubmit: any }) => {
    return (
        <form onSubmit={value.onSubmit}>
            <h1>comment</h1>
            <input onChange={value.onChange} name="name" value={value.state.name}  placeholder="お名前（任意）" />
            <input onChange={value.onChange} name="contents" value={value.state.contents} required={true} placeholder="コメントを入力"/>
            <Submit />
        </form>
    )
}