import { BlogDetail } from '../../component/blog/BlogDetail'

import { PostProps } from '../../props/props'


const Post = (props: PostProps) => {
  return (
    <BlogDetail props={props} />
  )
}

Post.getInitialProps = async (context) => {
    const { id } = context.query
    const res = await fetch(`https://api.takurinton.com/blog/v1/post/${id}`)
    return await res.json()
}

export default Post