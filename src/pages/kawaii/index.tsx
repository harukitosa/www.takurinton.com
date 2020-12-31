import _ from 'highlight.js/lib/languages/*';
import marked from 'marked';
import { Heading } from '../../component/common/atoms/Heading'
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/wiki.scss')
const { markdownStyle } = require('../../styles/markdown/dairyreport')

export const Kawaii = (res: {kawaii: string}) => {
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(res.kawaii, {renderer: r})

  return (
    <div>
      <HtmlHead 
        title={`たくりんとん | 可愛いもの`}
        description={`kawaii`}
        image={'https://www.takurinton.com/me.jpeg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text="可愛い" />
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
}


Kawaii.getInitialProps = async () => {
  return await { kawaii: kawaii }
}

const kawaii = ` 
# 僕の可愛いものコレクション！
`

export default Kawaii