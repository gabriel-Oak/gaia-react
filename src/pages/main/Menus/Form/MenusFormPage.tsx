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
import WeekTabs from '../../../../shared/components/WeekTabs/WeekTabs';

// import useStyles from './styles';

interface Props {
  loading?: boolean;
}

const MenusFormPage: FC<InjectedFormProps<any, Props>> = (props: any) => {
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

  // const classes = useStyles();

  return (
    <Card>

      <WeekTabs index={0} onChange={() => { }}>

      </WeekTabs>
    </Card >
  );
}

export default reduxForm<any, Props>({ form: 'user' })(MenusFormPage);
