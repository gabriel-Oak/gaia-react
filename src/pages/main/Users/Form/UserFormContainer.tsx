import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserFormPage from './UserFormPage';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';
import { formValueSelector } from 'redux-form';
import * as actions from './actions';
import { History } from 'history';
interface Props {
  setTitle: Function;
  password: string;
  create: Function;
  match: { params: { userId: number } };
  getUser: Function;
  history: History;
  update: Function;
};

const UserFormContainer = (props: Props) => {
  const {
    setTitle,
    password,
    create,
    match: { params: { userId } },
    getUser,
    history,
    update,
  } = props;

  useEffect(() => {
    setTitle(userId ? 'Editar usuário' : 'Novo usuário');
    if (userId) {
      getUser(userId);
    }
  }, [getUser, setTitle, userId]);

  const onSubmit = (userFom: any) => userId
    ? update(userFom, history.push)
    : create(userFom);


  const passMatch = (value: string | null) => (
    value !== password
    && 'As senhas não são iguais!'
  );

  return (
    <UserFormPage
      {...props}
      password={password}
      title={userId ? 'Editar usuário' : 'Novo usuário'}
      onSubmit={onSubmit}
      passMatch={passMatch}
      isEdit={!!userId}
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
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);
