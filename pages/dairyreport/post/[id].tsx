const Post = (props) => (
  <div>
      <h1>{props.post.pub_date}</h1>
      <p>{props.post.contents}</p>
  </div>
)

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${id}`)
  return await res.json()
}

export default Post