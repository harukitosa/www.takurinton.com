import Link from 'next/link'

const Main = (props) => (
    <div>
      <h1>takurinton</h1>
      <ul>
      {
        props.results.map(p => (
            <li key={p.id}>
                <Link href="/dairyreport/post/[id]" as={`/dairyreport/post/${p.id}`}>
                    <a>{p.pub_date}</a>
                </Link>
            </li>
        ))
      }
      </ul>
    </div>
)

Main.getInitialProps = async () => {
    const res = await fetch("https://api.takurinton.com/dairyreport/v1")
    return await res.json()
}

export default Main