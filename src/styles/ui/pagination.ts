import { createStyles, makeStyles } from '@material-ui/core/styles'

export const PaginitionStyle = makeStyles((theme:any) => 
    createStyles({
        root: {
            margin: '20px auto 10%', 
            position: 'relative', 
            [theme.breakpoints.down(theme.breakpoints.values.md)]: {
                marginBottom: '20%', 
                width: '70%'
            },
            [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
                width: '90%'
            },
        }, 
        nextButton: {
            marginBottom: '100px', 
            position: 'absolute',
            color: '#f7a046', 
            fontWeight: 700, 
            right: '0', 
        }, 
        previousButton: {
            marginBottom: '100px', 
            position: 'absolute', 
            color: '#f7a046',
            fontWeight: 700, 
            left: '0', 
        }
    })
)