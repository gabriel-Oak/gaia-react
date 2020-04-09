import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserFormPage from './UserFormPage';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';
import { formValueSelector } from 'redux-form';
import { create } from './actions';
interface Props {
  setTitle: Function;
  password: string;
  create: Function;
};

const UserFormContainer = (props: Props) => {
  const { setTitle, password, create } = props;

  useEffect(() => {
    setTitle('Novo usuário');
  }, [setTitle]);

  const onSubmit = (newUser: any) => {
    create(newUser);
  }

  const passMatch = (value: string | null) => (
    value !== password
    && 'As senhas não são iguais!'
  );

  return (
    <UserFormPage
      {...props}
      password={password}
      title="Novo usuário"
      onSubmit={onSubmit}
      passMatch={passMatch}
    />
  );
}

const selector = formValueSelector('user');
const mapStateToProps = (state: ReducersPool) => {
  const { user: { form } } = state;
  return {
    ...form,
    password: selector(state, 'password'),
  };
};

const mapDispatchToProps = {
  setTitle,
  create,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);
