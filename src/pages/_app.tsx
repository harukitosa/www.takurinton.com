import React from "react";
import Head from 'next/head';
import { Container } from "next/app";
import { Layout } from '../component/common/layout/Layout'


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