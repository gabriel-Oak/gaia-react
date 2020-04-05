import React, { FC } from 'react';
import { Form, reduxForm, Field } from 'redux-form';
import {
  Card,
  Container,
  CardHeader,
  CardContent,
  Button,
  CardActions
} from '@material-ui/core';
import RenderTextField from '../../../../shared/components/renderTextField/renderTextField';
import { required, isEmail } from '../../../../shared/validators/validators';
import useStyles from './styles';

const UserFormPage: FC<any> = (props: any) => {
  const { handleSubmit, onSubmit, loading } = props;
  const classes = useStyles();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container
        maxWidth="xs"
        className={classes.root}
      >
        <Card>
          <CardHeader title="Novo usuário" />
          <CardContent>

            <Field
              name="name"
              label="Nome"
              variant="outlined"
              disabled={loading}
              component={RenderTextField}
              validate={[required]}
            />

            <Field
              name="email"
              label="Email"
              variant="outlined"
              disabled={loading}
              component={RenderTextField}
              validate={[required, isEmail]}
            />

            <Field
              type="password"
              name="password"
              label="Senha"
              variant="outlined"
              disabled={loading}
              component={RenderTextField}
              validate={[required]}
            />

            <Field
              type="password"
              name="confirmPassword"
              label="Confirme a senha"
              variant="outlined"
              disabled={loading}
              component={RenderTextField}
              validate={[required]}
            />

          </CardContent>
          <CardActions
            classes={{ root: classes.actions }}
          >

            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Criar
            </Button>

          </CardActions>
        </Card>
      </Container>
    </Form>
  );
}

export default reduxForm({ form: 'user' })(UserFormPage);
