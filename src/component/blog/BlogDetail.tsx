import marked from 'marked';
const { markdownStyle } = require('../../styles/markdown/dairyreport')
import { Heading } from '../../component/common/atoms/Heading'
import { PostProps } from '../../props/props' 
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/markdown.scss')
const style = require('../../styles/style/blog.scss')

export const BlogDetail = (props: {props: PostProps}) => {
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(props.props.contents, {renderer: r})
  const pubDate = props.props.pub_date.substring(0, 10)
  return (
    <div>
      <HtmlHead 
        title={`たくりんとんのブログ | ${props.props.title}`}
        description={`${props.props.title}`}
        image={`https://takurinton.com${props.props.contents_image_url}`}
        url={'https://takurinton.com'}
      />
      
      <div className={style.detail}>
        <Heading text={props.props.title} />
        <p>{pubDate}</p>
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
}