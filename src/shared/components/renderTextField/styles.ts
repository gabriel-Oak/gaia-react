import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: '100%',
    ['&:not(:last-of-type)']: {
      marginBottom: 20,
    }
  }
});

export default useStyles;
