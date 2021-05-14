import marked from 'marked';
const { markdownStyle } = require('../../styles/markdown/dairyreport')
import { Heading } from '../../component/common/atoms/Heading'
import { PostProps } from '../../props/props' 
import { HtmlHead } from '../../component/common/Head'
import { Comment } from './comment/Comment'
import { syntaxHighlight } from '../../styles/markdown/syntaxHighlight'
const css = require('../../styles/markdown/markdown.scss')
const style = require('../../styles/style/blog.scss')

export const BlogDetail = (props: {props: PostProps}) => {
  const id = JSON.stringify(props.props.id);
  syntaxHighlight() 
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(props.props.contents, {renderer: r})
  const pubDate = props.props.pub_date.substring(0, 10)

  return (
    <div>
      <HtmlHead 
        title={`たくりんとんのブログ | ${props.props.title}`}
        description={`${props.props.title}`}
        // image={`https://takurinton.com${props.props.contents_image_url}`}
        image={`https://res.cloudinary.com/dtapptgdd/image/upload/w_1000/l_text:Sawarabi Gothic_70_bold:${props.props.title}/v1620370500/Screen_Shot_2021-05-07_at_15.54.47_extlvu.png`}
        url={`https://takurinton.com/post/${id}`}
      />
      
      <div className={style.detail}>
        <Heading text={props.props.title} />
        <p>{pubDate}</p>
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />

       <Comment postId={props.props.id} comment={props.props.comment} />
    </div>
  )
}