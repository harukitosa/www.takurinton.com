import marked from 'marked';
const { markdownStyle } = require('../../../styles/ui/dairyreport')
import { Heading } from '../../../component/common/atoms/Heading'
import { DairyreportContent } from '../../../props/props' 
import { HtmlHead } from '../../../component/common/Head'
const css = require('../../../styles/style/markdown.scss')

const Post = (props: DairyreportContent) => {
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(props.post.contents, {renderer: r})
  const pubDate = props.post.pub_date.substring(0, 10)
  return (
    <div>
      <HtmlHead 
        title={`たくりんとん | ${pubDate}の日報`}
        description={`${pubDate}の日報`}
        image={'https://blog.takurinton.com/me.jpg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text={pubDate} />
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
    
  )
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${id}`)
  return await res.json()
}

export default Post