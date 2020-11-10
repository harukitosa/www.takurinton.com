import { createStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles'

export const res = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 414,
      md: 800,
      lg: 1024, 
      xl: 1280
    },
  },
})

export const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#ffff8b',
          main: '#81c784',
          dark: '#c9bc1f',
          contrastText: '#000000',
        },
        secondary: {
          light: '#63a4ff',
          main: '#1976d2',
          dark: '#004ba0',
          contrastText: '#ffffff',
        },
      },
  });

export const HeaderStyle = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: "3%",
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: "center", 
    }, 
    link: {
      color: "#000", 
      textDecoration: "none", 
    }
  })
);