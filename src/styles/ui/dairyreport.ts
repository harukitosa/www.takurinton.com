import { createStyles, makeStyles } from '@material-ui/core/styles'
import marked from 'marked';

export const DairyreportStyle = makeStyles((theme: any) =>
  createStyles({
    root: {
        width: '60%', 
        marginRight: 'auto', 
        marginLeft: 'auto', 
        [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
            width: '90%', 
        }
    }, 
    items: {
        display: 'flex', 
        justifyContent: 'left', 
        flexWrap: 'wrap', 
      [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
        justifyContent: 'left', 
        display: 'block'
    },
    }
  })
);

export const DairyreportContentStyle = makeStyles((theme: any) =>
    createStyles({
    root: {
        margin: '3% 1% 3%', 
        padding: '50px 5% 40px', 
        boxShadow: '4px 4px 8px gray', 
        borderRadius: '10px', 
        width: '38%', 
        textAlign: 'center', 
        background: 'linear-gradient(180deg, #7fd5ea 10%, white 10%)', 
        [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
            margin: '3% auto 3%', 
            width: '80%'
        }, 
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            margin: '3% auto 3%'
        },
    }, 
    title: {
        fontSize: '1.6rem', 
        color: 'black !important', 
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            fontSize: '1.2rem'
        },
    }
    })
);

export const DetailStyle = makeStyles((theme: any) =>
createStyles({
    root: {
        marginRight: 'auto', 
        marginLeft: 'auto', 
        width: '70%', 
        textAlign: 'center', 
        [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
            width: '77%'
        },
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            width: '85%'
        },
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            width: '90%'
        },
    }, 
    title: {
        marginTop: '50px', 
        marginBottom: '50px', 
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            fontSize: '1.6rem', 
        },

    }, 
    p: {
        textAlign: 'right', 
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            fontSize: '1rem'
        },
    }, 
    content: {
        textAlign: 'left',
    }
})
);


// markdownにclassを付け加えるのとちょっとだけカスタマイズする作業
export const markdownStyle = () => {
    const r = new marked.Renderer()
    r.heading = (text:string, level:number) => {
        return (
            `<h${level} class="h${level}"">${text}</h${level}>`
        )
    }
    r.table = (header: string, body: string) => { 
        return (
            `<table class="table" border="1" width="100%">
                ${header}
                ${body}
             </table>`
        )
    }
    r.list = (body: string, ordered: boolean, start: number) => {
        return (
            `
            <ul>
                ${body}
            </ul>
            `
        )
    }
    r.image = (href: string | null, title: string | null, text: string) => {
        return (
            `
            <img src=${href} class="content-img" />
            `
        )
    }
    r.paragraph = (text: string) => {
        return (
            `
            <p class="p">${text}</p>
            `
        )
    }
    return r
}