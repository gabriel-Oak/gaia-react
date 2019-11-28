import React from 'react'

import { Field, reduxForm } from 'redux-form';
import { required } from '../../shared/validators/validators';
import RenderTextField from '../../shared/components/renderTextField/renderTextField';

import { Button, CardActions, CardContent } from '@material-ui/core';

import './Auth.css';

interface Props {

}

const AuthForm = (props: Props) => {
  // const { } = props

  return (
    <form>

      <CardContent className="field_wrapper">
        <Field
          name="user"
          label="Usuário"
          variant="outlined"
          component={RenderTextField}
          validate={[required]}
        />

        <Field
          name="password"
          label="Senha"
          variant="outlined"
          component={RenderTextField}
          validate={[required]}
        />
      </CardContent>

      <CardActions className="button-container">
        <Button
          color="primary"
          variant="contained"
          type="submit"
        >
          Entrar
        </Button>
      </CardActions>
    </form>
  );
}

export default reduxForm({ form: 'auth' })(AuthForm);
