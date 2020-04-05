import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    padding: 0,
    [breakpoints.up('sm')]: {
      marginTop: 80,
      zIndex: 1,
    },
  }
}));

export default useStyles;