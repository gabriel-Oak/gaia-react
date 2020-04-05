import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('sm')]: {
      position: 'absolute',
      top: 0,
      left:0,
      height: 120,
      zIndex: -1,
      boxShadow: 'none'
    }
  }
}));

export default useStyles;
