import React from 'react'

import { Field, reduxForm } from 'redux-form';
import { required } from '../../shared/validators/validators';
import RenderTextField from '../../shared/components/renderTextField/renderTextField';

import { Button, CardActions, CardContent, CircularProgress } from '@material-ui/core';

import './Auth.css';

const AuthForm = (props: any) => {
  const { handleSubmit, onSubmit, loading } = props

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <CardContent className="field_wrapper">
        <Field
          name="user"
          label="Usuário"
          variant="outlined"
          disabled={loading}
          component={RenderTextField}
          validate={[required]}
        />

        <Field
          name="senha"
          label="Senha"
          variant="outlined"
          disabled={loading}
          component={RenderTextField}
          validate={[required]}
        />
      </CardContent>

      <CardActions className="button-container">
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={loading}
        >
          {
            loading
              ? <CircularProgress size={24} />
              : 'Entrar'
          }
        </Button>
      </CardActions>
    </form>
  );
}

export default reduxForm({ form: 'auth' })(AuthForm);
