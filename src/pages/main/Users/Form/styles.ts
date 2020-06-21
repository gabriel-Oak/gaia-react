import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root1: {
    padding: 0,
  },
  actions1: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content1: {
    textAlign: 'right',
  },
  root: {
    flexDirection: 'row-reverse',
  },
  action: {
    marginRight: 20,
    marginTop: 0
  }
});

export default useStyles;
