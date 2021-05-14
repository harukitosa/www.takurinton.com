import Link from 'next/link'
import { PostProps } from '../../props/props'

const css = require('../../styles/style/blog.scss')

export const BlogContent = (post: PostProps) => {
    const pubDate = post.pub_date.substring(0, 10)
    const image = post.contents_image_url === '' ? 'https://www.takurinton.com/me.jpeg' : 'https://takurinton.com' + post.contents_image_url
    return (
        <div className={css.box}>
            <Link href="/post/[id]" as={`/post/${post.id}`} passHref>
                <a>
                <div className={css.content}>
                    {/* あとでbr消しておいてね */}
                    <img src={`https://res.cloudinary.com/dtapptgdd/image/upload/w_1000/l_text:Sawarabi Gothic_70_bold:${post.title}/v1620370500/Screen_Shot_2021-05-07_at_15.54.47_extlvu.png`} alt={post.title} /> <br /> 
                    <h1>{post.title}</h1>
                </div>
                </a>
                
            </Link>
            <Link href={`/?category=${post.category}`}>
                <a className={css.category}>
                    {post.category}
                </a>
            </Link>
            <p>{pubDate}</p>
        </div>
    )
}