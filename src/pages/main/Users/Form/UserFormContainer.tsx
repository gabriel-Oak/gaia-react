import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserFormPage from './UserFormPage';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';
import { User } from '../../../../shared/interfaces/User';

interface Props {
  setTitle: Function;
};

const UserFormContainer = (props: Props) => {
  const { setTitle } = props;

  useEffect(() => {
    setTitle('Novo usuário');
  }, [setTitle]);

  const onSubmit = (newUser: any) => {
    console.log(newUser);
  }

  return (
    <UserFormPage
      {...props}
      onSubmit={onSubmit}
    />
  );
}

const mapStateToProps = (state: ReducersPool) => {
  const { homeReducer } = state;
  return homeReducer;
};

const mapDispatchToProps = {
  setTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);
