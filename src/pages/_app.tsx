import { useEffect } from "react";
import { Container } from "next/app";
import { Layout } from '../component/common/layout/Layout'
import { Error } from '../function/error/err'

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
            <Layout>
              {component}
            </Layout>
        </Container> 
      </>
      );
}

export default App