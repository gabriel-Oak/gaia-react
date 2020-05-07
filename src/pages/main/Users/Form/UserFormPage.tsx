import React, { FC } from 'react';
import { Form, reduxForm, Field, InjectedFormProps } from 'redux-form';
import {
  Card,
  Container,
  CardHeader,
  CardContent,
  Button,
  CardActions,
  LinearProgress
} from '@material-ui/core';
import RenderTextField from '../../../../shared/components/renderTextField/renderTextField';
import { required, isEmail } from '../../../../shared/validators/validators';
import useStyles from './styles';
import RenderCheckBox from '../../../../shared/components/RenderCheckBox';

interface Props {
  loading?: boolean;
  passMatch: Function;
  onSubmit: Function;
  hideAdmin?: boolean;
  title: string;
  password?: string
  isEdit?: boolean
}

const UserFormPage: FC<InjectedFormProps<any, Props>> = (props: any) => {
  const {
    handleSubmit,
    onSubmit,
    loading,
    passMatch,
    hideAdmin,
    title,
    password,
    isEdit,
  } = props;

  const classes = useStyles();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container
        maxWidth="xs"
        className={classes.root}
      >
        <Card>
          {
            loading && <LinearProgress color="secondary" />
          }
          <CardHeader title={title} />
          <CardContent classes={{ root: classes.content }}>

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

            {
              !isEdit &&
              <Field
                type="password"
                name="password"
                label="Senha"
                variant="outlined"
                disabled={loading}
                component={RenderTextField}
                validate={!hideAdmin && [required]}
              />
            }

            {
              !isEdit &&
              <Field
                type="password"
                name="confirmPassword"
                label="Confirme a senha"
                variant="outlined"
                disabled={loading || (hideAdmin && !password)}
                component={RenderTextField}
                validate={(!hideAdmin || password) && [required, passMatch]}
              />
            }


            {
              hideAdmin && password &&
              <Field
                type="password"
                name="oldPassword"
                label="Informe a senha antiga"
                variant="outlined"
                disabled={loading}
                component={RenderTextField}
                validate={[required]}
              />
            }

            {
              !hideAdmin &&
              <Field
                name="admin"
                label="É administrador"
                disabled={loading}
                component={RenderCheckBox}
              />
            }

          </CardContent>
          <CardActions classes={{ root: classes.actions }} >

            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Enviar
            </Button>

          </CardActions>
        </Card>
      </Container>
    </Form>
  );
}

export default reduxForm<any, Props>({ form: 'user' })(UserFormPage);
