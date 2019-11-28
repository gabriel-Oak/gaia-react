import React, { PureComponent, ReactNode } from 'react'
import { ReducersPool } from '../../reducers';
import { AuthState } from './authReducer';
import { connect } from 'react-redux';

import { setTitle } from '../main/mainActions';
import { logIn, closeSnack } from './authActions';

import { Card, CardHeader } from '@material-ui/core';
import AuthForm from './AuthForm';
import Snack from '../../shared/components/snack/snack';

interface Props extends AuthState {
  setTitle: Function;
  closeSnack: Function;
  logIn: any;
}

class AuthPage extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.props.setTitle('Login');
  }

  render(): ReactNode {
    const { snackbar, closeSnack } = this.props;

    return (
      <main className="Auth">
        <article className="Center-container s600">
          <Card>

            <CardHeader title="Login" />
            <AuthForm
              onSubmit={this.props.logIn}
              {...this.props}
            />

          </Card>
        </article>

        <Snack
          closeSnack={closeSnack}
          {...snackbar}
        />
      </main>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  const { authReducer } = state;
  return authReducer;
};

const mapDispatchToProps = {
  setTitle,
  closeSnack,
  logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
