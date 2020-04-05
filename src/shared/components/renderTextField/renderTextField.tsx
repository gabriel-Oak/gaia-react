import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import useStyles from './styles';

interface Props {
  input: any;
  variant: 'outlined' | 'standart';
  meta: {
    touched: boolean;
    error: string;
    warning: boolean;
  }
}

const RenderTextField: FC<Props> = (props: Props) => {
  const {
    input,
    meta: { touched, error },
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <TextField
      {...input}
      {...rest}
      error={touched && !!error}
      helperText={touched && error}
      className={classes.root}
    />
  );
}

export default RenderTextField
