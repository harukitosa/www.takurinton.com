import marked from 'marked';
import { Heading } from '../../component/common/atoms/Heading'
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/wiki.scss')
const { markdownStyle } = require('../../styles/markdown/dairyreport')



export const Wiki = () => {
  const r: marked.Renderer = markdownStyle()
  const wiki = require('../../../md/wiki.md')
  // マークダウンなぜか呼べなくてイライラしちゃった
//   const wiki = ` 
// # 見出し1
// - hoge
// - fuga
// - poyo
// - piyo
//   - nest 
//   - nest/hoge

// ## 見出し2
// ~~utikesi~~  
// **strong**
// `
  const md: string = marked(wiki, {renderer: r})

  return (
    <div>
      <HtmlHead 
        title={`たくりんとん | wiki`}
        description={`wikiなのじゃ`}
        image={'https://www.takurinton.com/me.jpeg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text="wiki" />
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
}

export default Wiki