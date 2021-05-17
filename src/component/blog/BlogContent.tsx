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
                    <h1>{post.title}</h1>
                    <Link href={`/?category=${post.category}`}>
                        <a className={css.category}>
                            {post.category}
                        </a>
                    </Link>
                    <p className={css.pubDate}>{pubDate}</p>
                    <p>{post.contents}</p>
                </div>
                </a>
            </Link>
            <hr />
        </div>
    )
}