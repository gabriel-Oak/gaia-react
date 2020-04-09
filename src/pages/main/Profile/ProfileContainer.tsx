import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ReducersPool } from '../../../reducers';
import { setTitle } from '../mainActions';
import UserFormPage from '../Users/Form/UserFormPage';
import { formValueSelector } from 'redux-form';
import { initializeForm, update } from './actions';

interface Props {
  setTitle: Function;
  password?: string;
  initializeForm: Function;
  update: Function;
}

const ProfileContainer: FC<Props> = (props: Props) => {
  const {
    setTitle,
    password,
    initializeForm,
    update,
  } = props;

  useEffect(() => {
    setTitle('Editar perfil');
    initializeForm();
  }, [setTitle, initializeForm]);

  const onSubmit = (newUser: any) => update(newUser);

  const passMatch = (value: string | null) => (
    value !== password
    && 'As senhas não são iguais!'
  );

  return (
    <UserFormPage
      {...props}
      password={password}
      title="Editar perfil"
      onSubmit={onSubmit}
      passMatch={passMatch}
      hideAdmin
    />
  );
}

const selector = formValueSelector('user');
const mapStateToProps = (state: ReducersPool) => ({
  password: selector(state, 'password'),
});

const mapDispatchToProps = {
  setTitle,
  initializeForm,
  update,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
