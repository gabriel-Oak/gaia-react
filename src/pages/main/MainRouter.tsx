import React, { PureComponent, ReactNode } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { authenticate, closeSnack } from './mainActions';

import HomePage from './Home/HomePage'
import { connect } from 'react-redux';
import { ReducersPool } from '../../reducers';
import { mainState } from './mainReducer';
import { getSession } from '../../shared/utils/auth';

import Snack from '../../shared/components/snack/snack';

interface Props extends mainState {
  authenticate: Function;
  closeSnack: Function;
}

class MainRouter extends PureComponent<Props> {

  render(): ReactNode {
    const { snackbar, closeSnack } = this.props;
    const session = getSession();

    if (!session.token || session.expired) {
      return <Redirect to="login" />
    }

    return (
      <div className="Main">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>

        <Snack
          closeSnack={closeSnack}
          {...snackbar}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ReducersPool) => {
  const { mainReducer } = state;
  return mainReducer;
};

const mapDispatchToProps = {
  authenticate,
  closeSnack
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);