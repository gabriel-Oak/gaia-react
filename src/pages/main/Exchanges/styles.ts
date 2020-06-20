import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#4b4b4b',
    padding: 16,
    borderRadius: 4,
    width: '100%',
    '&:not(:last-of-type)': {
      marginBottom: 8
    }
  }
});

export default useStyles;