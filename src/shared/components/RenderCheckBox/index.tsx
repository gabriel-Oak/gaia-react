import React from 'react';
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

interface Props {
  input: {
    value?: boolean;
    onChange: Function;
  };
  meta: {
    touched: boolean;
    error: string;
    warning: boolean;
  }
  label: string;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  color?: "primary" | "secondary" | "default";
  className?: string;
  disabled?: boolean;
}

const RenderCheckBox = (props: Props) => {
  const {
    input: {
      value,
      onChange,
    },
    meta: { touched, error },
    label,
    labelPlacement,
    color,
    className,
    disabled,
  } = props;

  const handleChange = () => onChange(!value);

  return (
    <FormControl
      className={className}
      error={touched && !!error}
      disabled={disabled}
    >
      <FormControlLabel
        control={
          <Checkbox
            color={color}
            checked={!!value}
            onChange={handleChange}
          />
        }
        label={label}
        labelPlacement={labelPlacement}
      />
      {
        touched && error &&
        <FormHelperText>
          {error}
        </FormHelperText>
      }
    </FormControl>
  );
}

RenderCheckBox.defaultProps = {
  color: 'primary',
  labelPlacement: 'start',
}

export default RenderCheckBox;
