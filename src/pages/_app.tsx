import { useEffect } from "react";
import { Container } from "next/app";
import { useRouter } from 'next/router';
// import { Layout } from '../component/common/layout/Layout'
import { Header } from '../component/common/parts/Header'
import { Error } from '../function/error/err'
import { HtmlHead } from '../component/common/Head'

import hotkeys from 'hotkeys-js'

// @ts-ignore
import '../styles/base.scss'

// const pages = ['/', 'dairyreport', 'baka', 'kawaii', 'wiki']

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  if (process.browser) {
    hotkeys('command+m', e => {
      e.preventDefault() 
      router.replace('/')
    })
    hotkeys('command+k', e => {
        e.preventDefault() 
        router.replace('/kawaii')
    })
    hotkeys('command+w', e => {
      e.preventDefault() 
      router.replace('/wiki')
    })
    hotkeys('command+a', e => {
      e.preventDefault() 
      router.replace('/sake')
    })
  }

  useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, []);
    
    const component = pageProps.status >= 400 ?  <Error status={pageProps.status} /> : <Component {...pageProps} />

    return (
      <>
        <Container>
        <HtmlHead 
            title={'たくりんとん'}
            description={'たくりんとんのポートフォリオです'}
            image={'https://www.takurinton.com/me.jpeg'}
            url={'https://www.takurinton.com'}
        />
        <style>{`* { margin: 0; padding: 0; }`}</style>
        <Header />
        {component}
        </Container> 
      </>
      );
}

export default App