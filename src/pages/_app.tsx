import React from "react";
import { Container } from "next/app";
import { Layout } from '../component/common/layout/Layout'

// @ts-ignore
import '../styles/base.scss'


const App = ({ Component, pageProps }) => {
    React.useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, []);
    
    return (
      <>
        <Container>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </Container> 
      </>
      );
}

export default App