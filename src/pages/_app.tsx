import { useEffect } from "react";
import { Container } from "next/app";
// import { Layout } from '../component/common/layout/Layout'
import { Header } from '../component/common/parts/Header'
import { Error } from '../function/error/err'
import { HtmlHead } from '../component/common/Head'

// @ts-ignore
import '../styles/base.scss'


const App = ({ Component, pageProps }) => {
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