import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ReducersPool } from '../../../../reducers';
import { setTitle } from '../../mainActions';
import UserListPage from './UserListPage';
import * as actions from './actions';
import { history } from '../../../../AppRouter';

interface Props {
  setTitle: Function;
  getUsers: Function;
  loading: boolean;
  users: any[];
}

const UserListContainer: FC<Props> = (props: Props) => {
  const {
    setTitle,
    getUsers,
    loading,
    users,
  } = props;

  useEffect(() => {
    setTitle('Usuários');
    getUsers();
  }, [setTitle, getUsers]);

  const handleNew = () => history.push('/users/new');

  return (
    <UserListPage
      title="Usuários"
      loading={loading}
      users={users}
      onNew={handleNew}
    />
  );
}

const mapStateToProps = (state: ReducersPool) => state.user.list;
const mapActionsToProps = {
  ...actions,
  setTitle,
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(UserListContainer);