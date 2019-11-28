import React, { PureComponent, ReactNode } from 'react'
import { ReducersPool } from '../../reducers';
import { AuthState } from './authReducer';
import { connect } from 'react-redux';

import { setTitle } from '../main/mainActions';

import { Card, CardHeader } from '@material-ui/core';
import AuthForm from './AuthForm';

interface Props extends AuthState {
  setTitle: Function;
}

class AuthPage extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.props.setTitle('Login');
  }

  render(): ReactNode {
    return (
      <main className="Auth">
        <article className="Center-container s600">
          <Card>
            <CardHeader title="Login" />
            <AuthForm />
          </Card>
        </article>
      </main>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  const { authReducer } = state;
  return authReducer;
};

const mapDispatchToProps = {
  setTitle
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
