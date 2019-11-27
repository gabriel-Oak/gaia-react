import React, { PureComponent, ReactNode } from 'react'
import { ReducersPool } from '../../reducers';
import { AuthState } from './authReducer';
import { connect } from 'react-redux';

interface Props extends AuthState {

}

class AuthPage extends PureComponent<Props> {
  // constructor(props: Props) {
  //     super(props);
  // }

  render(): ReactNode {
    return (
      <div>OLA LOGIN</div>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  const { authReducer } = state;
  return authReducer;
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
