import _ from 'highlight.js/lib/languages/*';
import marked from 'marked';
import { Heading } from '../../component/common/atoms/Heading'
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/wiki.scss')
const { markdownStyle } = require('../../styles/markdown/dairyreport')

export const Sake = (res: {sake: string}) => {
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(res.sake, {renderer: r})

  return (
    <div>
      <HtmlHead 
        title={`たくりんとん | お酒`}
        description={`sake`}
        image={'https://www.takurinton.com/me.jpeg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text="お酒" />
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
}


Sake.getInitialProps = async () => {
  return await { sake: sake }
}

const sake = ` 
# お酒
`

export default Sake