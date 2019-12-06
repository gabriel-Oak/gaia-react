import React from 'react'
import { TextField } from '@material-ui/core'

interface Props {
  input: any;
  variant: 'outlined' | 'standart';
  meta: {
    touched: boolean;
    error: string;
    warning: boolean;
  }
}

const RenderTextField = (props: Props) => {
  const {
    input,
    meta: { touched, error },
    ...rest
  } = props

  return (
    <TextField
      {...input}
      {...rest}
      error={touched && !!error}
      helperText={touched && error}
      className="Field"
    />
  );
}

export default RenderTextField
