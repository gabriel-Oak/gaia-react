import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserFormPage from './UserFormPage';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';
import { formValueSelector } from 'redux-form';

interface Props {
  setTitle: Function;
  password: String;
};

const UserFormContainer = (props: Props) => {
  const { setTitle, password } = props;

  useEffect(() => {
    setTitle('Novo usuário');
  }, [setTitle]);

  const onSubmit = (newUser: any) => {
    console.log(newUser);
  }

  const passMatch = (value: string | null) => (
    value !== password
    && 'As senhas não são iguais!'
  );

  return (
    <UserFormPage
      {...props}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);
