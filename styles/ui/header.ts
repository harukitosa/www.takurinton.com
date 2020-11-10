import { createStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles'

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
