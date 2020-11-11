import { Header } from '../parts/Header'
import { HtmlHead } from '../Head'

export const Layout = (props) => (
    <>
        <HtmlHead 
            title={'たくりんとん'}
            description={'たくりんとんのポートフォリオです'}
            image={'https://blog.takurinton.com/me.jpg'}
            url={'https://takurinton.com'}
        />
        <style>{`* { margin: 0; padding: 0; }`}</style>
        <Header />
      {props.children}
    </>
);
