import React from 'react'
import { Select, MenuItem, FormHelperText } from '@material-ui/core';

interface Props {
  input: any;
  variant: 'outlined' | 'standart';
  meta: {
    touched: boolean;
    error: string;
    warning: boolean;
  }
  options: any[];
  model: {
    name: string;
    value: string;
  };
}

const RenderSelectField = (props: Props) => {
  const {
    input,
    meta: { touched, error },
    options,
    model,
    ...rest
  } = props;

  return (
    <>
      <Select
        {...input}
        {...rest}
        error={touched && !!error}
        className="Field"
      >
        {
          options.map((option: any, index: number) => (
            <MenuItem
              value={option[model.value || 'value']}
              key={index}
              className={
                option[model.value || 'value'] === input.value ? 'hidden' : ''
              }
            >
              {option[model.name || 'name']}
            </MenuItem>
          ))
        }
      </Select>
      {
        touched && error &&
        <FormHelperText>
          {error}
        </FormHelperText>
      }

    </>
  );
}

export default RenderSelectField
