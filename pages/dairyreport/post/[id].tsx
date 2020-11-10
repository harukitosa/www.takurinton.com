import { Layout } from '../../../component/layout/Layout'
import marked from 'marked';

import { Box } from '@material-ui/core'
import { DetailStyle, markdownStyle } from '../../../styles/ui/dairyreport'

import { DairyreportContent } from '../../../props/props' 

const Post = (props: DairyreportContent) => {
  const classes = DetailStyle()
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(props.post.contents, {renderer: r})
  const pubDate = props.post.pub_date.substring(0, 10)
  return (
    <Layout>
      <div className={classes.root}>
          <h1>{pubDate}</h1>
          <Box className={classes.content} dangerouslySetInnerHTML={{ __html: md }} />
      </div>
    </Layout>
  )
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${id}`)
  return await res.json()
}

export default Post