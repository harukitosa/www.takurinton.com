import { DairyreportContent } from '../../../props/props' 
import { DairyDetail } from '../../../component/dairyreport/DairyDetail'

const Post = (props: DairyreportContent) => {
  return (
    <DairyDetail props={props} />
  )
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${id}`)
  return await res.json()
}

export default Post