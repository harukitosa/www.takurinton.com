import { DairyreportContent } from '../../../props/props' 
import { DairyDetail } from '../../../component/dairyreport/DairyDetail'
import { Error } from '../../_error'

const Post = (res: { res: DairyreportContent, status: number }) => {
  if (res.status >= 400) {
    return <Error status={res.status} />
  }

  return (
    <DairyDetail props={res.res} />
  )
}

Post.getInitialProps = async (context: any) => {
  const { id } = context.query
  const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${id}`)
  const response =  await res.json()
  return { res: response, status: res.status }
}

export default Post