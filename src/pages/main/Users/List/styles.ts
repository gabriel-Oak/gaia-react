import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints }) => ({
  root1: {
    padding: 0,
  },
  toolbar: {
    padding: 16,
  },
  actionsContainer: {
    margin: '0 8px 0 auto',
  },
  table: {
    '& thead': {
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '& tr': {
      [breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    '& td': {
      [breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%!important  ',
        '&:before': {
          content: 'attr(datatype)',
          fontWeight: 700,
          marginRight: 8,
        },
        '&:not(:last-of-type)': {
          borderBottom: 'none',
        },
      },
    },
  },
}));

export default useStyles;
