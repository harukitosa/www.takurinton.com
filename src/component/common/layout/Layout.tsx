import { Header } from '../parts/Header'
import { HtmlHead } from '../Head'

export const Layout = (props:any) => (
    <>
        <HtmlHead 
            title={'たくりんとん'}
            description={'たくりんとんのポートフォリオです'}
            image={'me.jpg'}
            url={'https://www.takurinton.com'}
        />
        <style>{`* { margin: 0; padding: 0; }`}</style>
        <Header />
      {props.children}
    </>
);
