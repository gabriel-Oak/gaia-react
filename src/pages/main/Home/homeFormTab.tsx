import React from 'react'
import RenderTextField from '../../../shared/components/renderTextField/renderTextField';
import { Field } from 'redux-form';
import { CardContent } from '@material-ui/core';

interface Props {
  name: string;
  loading?: boolean;
}

const HomeFormTab = (props: Props) => {
  const { name, loading } = props;

  return (
    <CardContent>

      <Field
        name={name}
        label="Prato Principal"
        variant="outlined"
        component={RenderTextField}
        disabled={loading}
      />

    </CardContent>
  );
}

export default HomeFormTab;
